import ProblemDetails from "../models/ProblemDetails.js";

const problemsDetails = async (req, res) => {
  try {
    const problem = await ProblemDetails.findOne({ id: req.params.id }); // 👈 not findById
    if (!problem) {
      return res.status(404).json({ error: 'Problem not found' });
    }
    res.json(problem);
  } catch (err) {
    console.error('Error fetching problem:', err);
    res.status(500).json({ error: 'Server error' });
  }};
export default problemsDetails;