import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();
const cache = new Map();

router.get('/jobs', async (req, res) => {
  const {
    query = 'developer jobs',        // Can be comma-separated list of roles
    location = 'chicago',
    page = 1,
    country = 'us',
    date_posted = 'all',
    skills = '',                     // Comma-separated skills
  } = req.query;

  if (!process.env.RAPIDAPI_KEY) {
    return res.status(500).json({ error: 'Missing RAPIDAPI_KEY in .env' });
  }

  const queries = query.split(',').map(q => q.trim()).filter(Boolean);
  const skillsArray = skills
    .split(',')
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);

  const cacheKey = `${queries.join(',')}-${location}-${page}-${country}-${date_posted}-${skills}`;
  if (cache.has(cacheKey)) {
    console.log(`⚡ [CACHE HIT] /jobs → ${cacheKey}`);
    return res.json(cache.get(cacheKey));
  }

  try {
    let allJobs = [];

    for (const q of queries) {
      const response = await axios.get('https://jsearch.p.rapidapi.com/search', {
        params: {
          query: `${q} in ${location}`,
          page,
          num_pages: 1,
          country,
          date_posted,
        },
        headers: {
          'x-rapidapi-key': process.env.RAPIDAPI_KEY,
          'x-rapidapi-host': 'jsearch.p.rapidapi.com',
        },
      });

      const jobs = (response.data?.data || []).map((job) => ({
        title: job.job_title,
        company_name: job.employer_name,
        location: job.job_city || job.job_country || 'Remote',
        remote: job.job_is_remote,
        url: job.job_apply_link,
        description: job.job_description?.toLowerCase() || '',
      }));

      allJobs = allJobs.concat(jobs);
    }

    // Deduplicate by URL
    const uniqueJobs = Array.from(
      new Map(allJobs.map((job) => [job.url, job])).values()
    );

    // Optional skill-based filtering
    const filteredJobs = skillsArray.length
      ? uniqueJobs.filter((job) =>
          skillsArray.some(
            (skill) =>
              job.title.toLowerCase().includes(skill) ||
              job.description.includes(skill)
          )
        )
      : uniqueJobs;

    const result = {
      jobs: filteredJobs.map(({ description, ...rest }) => rest), // Remove long descriptions
      total: filteredJobs.length,
    };

    cache.set(cacheKey, result);
    console.log(`✅ [CACHE MISS] /jobs → Fetched and cached: ${result.jobs.length} jobs`);
    res.json(result);
  } catch (error) {
    console.error('❌ Error fetching jobs from JSearch API:');
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch jobs from JSearch API' });
  }
});

export default router;
