import React, { useRef, useEffect,useState } from "react";
import { Box, Button, Paper, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import Confetti from "react-confetti";
import moment from "moment";
import html2pdf from "html2pdf.js";
import DownloadIcon from "@mui/icons-material/Download";
import Feedback from "../Feedback";

import github from "../../assets/github.png";
import leetcode from "../../assets/leetcode.png";
import codechef from "../../assets/codechef.png";
import codeforces from "../../assets/codeforces.png";

import "../styles/resumetemplate1.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Template1() {
  const ref = useRef();
  const [congratsVisible, setCongratsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  // Sample static profile data - replace with your own or props if available
  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    mobile: "123-456-7890",
    email: "john.doe@example.com",
    address: "123 Main St, Anytown, USA",
    github: "https://github.com/johndoe",
    leetcode: "https://leetcode.com/johndoe",
    codechef: "https://codechef.com/users/johndoe",
    codeforces: "https://codeforces.com/profile/johndoe",
  });

  const [education, setEducation] = useState({
    college: "ABC University",
    year: "2023",
    branch: "Computer Science",
    startYear: "2019",
    endYear: "2023",
    grades: "3.8",
    higherCollege: "XYZ Institute",
    startYear2: "2017",
    endYear2: "2019",
    city: "Anytown",
    city2: "Anytown",
    percentage: "85",
    school: "Anytown High School",
    startYear3: "2015",
    endYear3: "2017",
    city3: "Anytown",
    percentage2: "90",
  });

  const [projects, setProjects] = useState([
    {
      title: "Project 1",
      link: "https://example.com/project1",
      techStack: "React, Node.js",
      description: "Description of project 1.",
    },
    {
      title: "Project 2",
      link: "https://example.com/project2",
      techStack: "Python, Flask",
      description: "Description of project 2.",
    },
  ]);

  const [experience, setExperience] = useState([
    {
      role: "Software Engineer",
      start_date: "2022-01-01",
      end_date: "2023-01-01",
      institute: "Tech Company",
      desc: "Developed web applications.\nCollaborated with cross-functional teams.",
    },
  ]);

  const [extraDetails, setExtraDetails] = useState({
    skills: {
      languages: ["JavaScript", "Python"],
      web: ["HTML", "CSS"],
      webFrameworks: ["React", "Angular"],
      databases: ["MySQL", "MongoDB"],
      other: ["Git", "Docker"],
    },
    achievements: ["Achievement 1", "Achievement 2"],
    extraCoCurricular: ["Club Member", "Volunteer"],
  });

  // On mount, try to get data from localStorage and update state
  useEffect(() => {
    const storedProfile = localStorage.getItem("profileData");
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }

    const storedEducation = localStorage.getItem("educationData");
    if (storedEducation) {
      setEducation(JSON.parse(storedEducation));
    }

    const storedProjects = localStorage.getItem("projectsData");
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
    }

    const storedExperience = localStorage.getItem("experienceData");
    if (storedExperience) {
      setExperience(JSON.parse(storedExperience));
    }

    const storedExtraDetails = localStorage.getItem("extraDetailsData");
    if (storedExtraDetails) {
      setExtraDetails(JSON.parse(storedExtraDetails));
    }
  }, []);

  const handleDownload = () => {
    const resumeContainer = document.querySelector(".resume-container");

    if (resumeContainer) {
      setLoading(true);
      const opt = {
        margin: 0.1,
        filename: "user-resume.pdf",
        image: { type: "jpeg", quality: 1.0 },
        html2canvas: { scale: 4 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      };

      html2pdf()
        .set(opt)
        .from(resumeContainer)
        .save()
        .then(() => {
          setLoading(false);
          setCongratsVisible(true);

          setTimeout(() => {
            setCongratsVisible(false);
          }, 5000);
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      console.error("Resume container not found.");
      setLoading(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const customStyle = {
    width: "100%",
    maxWidth: "794px",
    height: "1123px",
    maxHeight: "1123px",
    padding: "1rem 2rem",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div>
      <Navbar />
      <>
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={congratsVisible ? 600 : 0}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            margin: "2vw",
            flexGrow: 1,
          }}
        >
          <Paper
            className="resume-container"
            elevation={2}
            style={customStyle}
            ref={ref}
          >
            <Box sx={{ flexShrink: 4 }}>
              <h1 className="name-heading">
                {profile.firstName} {profile.lastName}
              </h1>
              <div className="user-detail">
                <div className="data">
                  <p>
                    <i className="fa-solid fa-phone" />
                  </p>
                  <p className="sub-heading">{profile.mobile}</p>
                </div>
                <div className="data">
                  <p>
                    <i className="fa-solid fa-envelope" />
                  </p>
                  <p className="sub-heading">{profile.email}</p>
                </div>
                <div className="data">
                  <p>
                    <i className="fa-solid fa-map-marker" />
                  </p>
                  <p className="sub-heading">{profile.address}</p>
                </div>
              </div>
              <div className="resume-content">
                <div className="left-section">
                  <div className="education-info">
                    <div className="heading">Education</div>
                    <hr />
                    <div className="info">
                      <div className="college">{education.college}</div>
                      <div className="clg-details">
                        <div className="clg-degree">
                          {education.year} {education.branch} Engineering
                        </div>
                        <div className="meta-data">
                          <div className="dates">
                            <i className="fa-solid fa-calendar" />
                            {education.startYear}-{education.endYear}
                          </div>
                          <div className="locality">
                            <i className="fa-solid fa-map-marker" />
                            {education.city}
                          </div>
                        </div>
                        <div className="grade">
                          {education.grades && <p>CGPA: {education.grades}</p>}
                        </div>
                      </div>
                    </div>
                    <div className="info">
                      <div className="higher-clg">{education.higherCollege}</div>
                      <div className="clg-details">
                        <div className="meta-data">
                          <div className="dates">
                            <i className="fa-solid fa-calendar" />
                            {education.startYear2}-{education.endYear2}
                          </div>
                          <div className="locality">
                            <i className="fa-solid fa-map-marker" />
                            {education.city2}
                          </div>
                        </div>
                        <div className="grade">
                          {education.percentage && (
                            <p>Percentage: {education.percentage}%</p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="info">
                      <div className="school">{education.school}</div>
                      <div className="school-details">
                        <div className="meta-data">
                          <div className="dates">
                            <i className="fa-solid fa-calendar" />
                            {education.startYear3}-{education.endYear3}
                          </div>
                          <div className="locality">
                            <i className="fa-solid fa-map-marker" />
                            {education.city3}
                          </div>
                        </div>
                        <div className="grade">
                          {education.percentage2 && (
                            <p>Percentage: {education.percentage2}%</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  {extraDetails.skills.languages &&
                    extraDetails.skills.languages.length > 0 && (
                      <div className="skills">
                        <div className="heading">Skills</div>
                        <hr />
                        {extraDetails.skills.languages.length > 0 && (
                          <>
                            <h4 className="skill-names">Languages:</h4>
                            <div className="skillset">
                              <ul className="sk">
                                {extraDetails.skills.languages.map(
                                  (skill, index) => (
                                    <li key={index}>{skill}</li>
                                  )
                                )}
                              </ul>
                            </div>
                          </>
                        )}
                        {extraDetails.skills.web.length > 0 && (
                          <>
                            <h4 className="skill-names">Web:</h4>
                            <div className="skillset">
                              <ul className="sk">
                                {extraDetails.skills.web.map((skill, index) => (
                                  <li key={index}>{skill}</li>
                                ))}
                              </ul>
                            </div>
                          </>
                        )}
                        {extraDetails.skills.webFrameworks.length > 0 && (
                          <>
                            <h4 className="skill-names">Web Frameworks:</h4>
                            <div className="skillset">
                              <ul className="sk">
                                {extraDetails.skills.webFrameworks.map(
                                  (skill, index) => (
                                    <li key={index}>{skill}</li>
                                  )
                                )}
                              </ul>
                            </div>
                          </>
                        )}
                        {extraDetails.skills.databases.length > 0 && (
                          <>
                            <h4 className="skill-names">Databases:</h4>
                            <div className="skillset">
                              <ul className="sk">
                                {extraDetails.skills.databases.map(
                                  (skill, index) => (
                                    <li key={index}>{skill}</li>
                                  )
                                )}
                              </ul>
                            </div>
                          </>
                        )}
                        {extraDetails.skills.other.length > 0 && (
                          <>
                            <h4 className="skill-names">Other:</h4>
                            <div className="skillset">
                              <ul className="sk">
                                {extraDetails.skills.other.map((skill, index) => (
                                  <li key={index}>{skill}</li>
                                ))}
                              </ul>
                            </div>
                          </>
                        )}
                      </div>
                    )}
                  <div className="links">
                    <div className="heading">Coding Profile</div>
                    <hr />
                    <div className="linkSets">
                      <div className="link-item">
                        {profile.github && (
                          <>
                            <img src={github} alt="github" />
                            <div className="ls">
                              <a
                                href={profile.github}
                                className="link"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {profile.lastName.length > 6 ? (
                                  <p>{profile.firstName?.toLowerCase()}</p>
                                ) : (
                                  <>
                                    <p>{profile.firstName[0]?.toLowerCase()}_</p>
                                    <span>{profile.lastName?.toLowerCase()}</span>
                                  </>
                                )}
                              </a>
                            </div>
                          </>
                        )}
                      </div>
                      <div className="link-item">
                        {profile.leetcode && (
                          <>
                            <img src={leetcode} alt="leetcode" />
                            <div className="ls">
                              <a
                                href={profile.leetcode}
                                className="link"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {profile.lastName.length > 6 ? (
                                  <p>{profile.firstName?.toLowerCase()}</p>
                                ) : (
                                  <>
                                    <p>{profile.firstName[0]?.toLowerCase()}_</p>
                                    <span>{profile.lastName?.toLowerCase()}</span>
                                  </>
                                )}
                              </a>
                            </div>
                          </>
                        )}
                      </div>
                      <div className="link-item">
                        {profile.codechef && (
                          <>
                            <img src={codechef} alt="codechef" />
                            <div className="ls">
                              <a
                                href={profile.codechef}
                                className="link"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {profile.lastName.length > 6 ? (
                                  <p>{profile.firstName?.toLowerCase()}</p>
                                ) : (
                                  <>
                                    <p>{profile.firstName[0]?.toLowerCase()}_</p>
                                    <span>{profile.lastName?.toLowerCase()}</span>
                                  </>
                                )}
                              </a>
                            </div>
                          </>
                        )}
                      </div>
                      <div className="link-item">
                        {profile.codeforces && (
                          <>
                            <img src={codeforces} alt="codeforces" />
                            <div className="ls">
                              <a
                                href={profile.codeforces}
                                className="link"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {profile.lastName.length > 6 ? (
                                  <p>{profile.firstName?.toLowerCase()}</p>
                                ) : (
                                  <>
                                    <p>{profile.firstName[0]?.toLowerCase()}_</p>
                                    <span>{profile.lastName?.toLowerCase()}</span>
                                  </>
                                )}
                              </a>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="subjects">
                    <div className="heading">Core Subjects</div>
                    <hr />
                    <div className="subject-list">
                      <ul>
                        <li>Data Structures and Algorithms</li>
                        <li>Database Management System</li>
                        <li>Operating System</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="right-section">
                  {experience.length > 0 && (
                    <div className="experience">
                      <div className="heading">Experience</div>
                      <hr />
                      <div className="expr-list">
                        <div className="lists">
                          {experience.map((exp, index) => (
                            <div key={index}>
                              <div className="role-date">
                                <p id="role">{exp.role}</p>
                                <p id="date">
                                  {moment(exp.start_date).format("MMM-YYYY")} -{" "}
                                  {moment(exp.end_date).format("MMM-YYYY")}
                                </p>
                              </div>
                              <div className="company">
                                <p>At {exp.institute}</p>
                              </div>
                              <div className="expr-desc">
                                <ul>
                                  {exp.desc.split("\n").map((line, index) => (
                                    <li key={index}>{line}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  {projects.length > 0 && (
                    <div className="projects">
                      <h2 className="project-heading">Projects</h2>
                      <hr />
                      <div className="project-sections">
                        {projects.map((project, index) => (
                          <div key={index}>
                            <div className="project-names">
                              <p>{project.title}</p>
                              <p id="link-icons">
                                <a href={project.link}>
                                  <i className="fa-solid fa-link"></i>
                                </a>
                              </p>
                            </div>
                            <p id="tech-stacks">{project.techStack}</p>
                            <div className="project-descs">
                              <ul>
                                {project.description
                                  .split("\n")
                                  .map((line, index) => (
                                    <li key={index}>{line}</li>
                                  ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {extraDetails.achievements.length > 0 && (
                    <div className="achievements">
                      <div className="heading">Achievements</div>
                      <hr />
                      <div className="list">
                        {extraDetails.achievements.map((achieve, index) => (
                          <ul key={index}>
                            <li>{achieve}</li>
                          </ul>
                        ))}
                      </div>
                    </div>
                  )}
                  {extraDetails.extraCoCurricular.length > 0 && (
                    <div className="extra-curricular">
                      <div className="heading">Extra Curricular</div>
                      <hr />
                      <div className="extra-list">
                        {extraDetails.extraCoCurricular.map((extra, index) => (
                          <ul key={index}>
                            <li className="value">{extra}</li>
                          </ul>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Box>
          </Paper>
          <Button
            variant="contained"
            sx={{
              margin: "20px",
              borderRadius: "20px",
              width: "12rem",
              backgroundColor: "var(--btn)",
              color: "black",
              "&:hover": { backgroundColor: "var(--btnHover)" },
            }}
            onClick={handleDownload}
            endIcon={<DownloadIcon />}
            className="download-button"
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Download"
            )}
          </Button>
          <Feedback open={open} handleClose={handleClose} />
        </Box>
      </>
      <Footer />
    </div>
  );
}
