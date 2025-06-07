import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Button,
  Box,
} from "@mui/material";
import TitleIcon from "@mui/icons-material/Title";
import DescriptionIcon from "@mui/icons-material/Description";
import LinkIcon from "@mui/icons-material/Link";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Projects = () => {
  const [projects, setProjects] = useState(() => {
    // Load from localStorage on initial state
    const storedProjects = JSON.parse(localStorage.getItem("projectsData"));
    return storedProjects || [];
  });

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedProjects = [...projects];
    updatedProjects[index] = { ...updatedProjects[index], [name]: value };
    setProjects(updatedProjects);
    localStorage.setItem("projectsData", JSON.stringify(updatedProjects));
  };

  const handleAddProject = () => {
    const newProject = { title: "", description: "", link: "", techStack: "" };
    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);
    localStorage.setItem("projectsData", JSON.stringify(updatedProjects));
  };

  const handleDeleteProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
    localStorage.setItem("projectsData", JSON.stringify(updatedProjects));
  };

  const containerStyle = {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  };

  const content = (
    <div>
      <p>1. Provide a description of the project.</p>
      <p>eg.</p>
      <p>Streamlined resume creation process using MERN stack.</p>
      <p>Integrated Material-UI and React for intuitive user interface.</p>
      <p>
        Implemented Redux for centralized state management and seamless data
        flow.
      </p>
    </div>
  );

  const TechStack = (
    <div>
      <p>1. Provide the tech stack used in the project.</p>
      <p>eg.</p>
      <p>React, Redux, Material-UI, Node.js, Express.js, MongoDB</p>
    </div>
  );

  return (
    <div>
      <Navbar />

      <div style={containerStyle}>
        <Card>
          <CardHeader
            title={
              <Typography variant="h5" align="center" fontWeight="bold">
                Projects Details
              </Typography>
            }
          />
        </Card>
        <CardContent>
          {projects.map((project, index) => (
            <div key={index}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h5" sx={{ marginTop: "8px" }}>
                  Project {index + 1}
                </Typography>
                <IconButton onClick={() => handleDeleteProject(index)}>
                  <DeleteIcon color="error" />
                </IconButton>
              </div>
              <Grid container spacing={1} alignItems="center" lg={12}>
                <Grid item md={12} sm={12} xs={12} lg={12}>
                  <Typography variant="h6" sx={{ marginTop: "8px" }}>
                    Project Title
                  </Typography>
                  <TextField
                    margin="dense"
                    variant="outlined"
                    type="text"
                    name="title"
                    label={`Project Title`}
                    style={{ width: "100%" }}
                    value={project.title}
                    onChange={(event) => handleInputChange(index, event)}
                    required
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton>
                            <TitleIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item md={12} sm={12} xs={12} lg={12}>
                  <Typography
                    variant="h6"
                    sx={{
                      marginTop: "8px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <p
                      style={{ display: "flex", gap: 3, alignItems: "center" }}
                    >
                      Project Description
                      <Tooltip
                        title={
                          <Box sx={{ p: 1, fontSize: "0.9rem" }}>
                            {"Use next line for each new sentence"}
                          </Box>
                        }
                        placement="top"
                        arrow
                      >
                        <p style={{ fontSize: "1rem" }}> ?</p>
                      </Tooltip>
                    </p>
                    <Tooltip
                      title={
                        <Box sx={{ p: 1, fontSize: "0.9rem" }}>{content}</Box>
                      }
                      placement="top"
                      arrow
                    >
                      <p style={{ fontSize: "1rem" }}>
                        <i className="fa-solid fa-circle-info"></i>
                      </p>
                    </Tooltip>
                  </Typography>
                  <TextField
                    margin="dense"
                    variant="outlined"
                    type="text"
                    name="description"
                    multiline
                    rows={4}
                    label={`Project Description`}
                    style={{ width: "100%" }}
                    value={project.description}
                    onChange={(event) => handleInputChange(index, event)}
                    required
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton>
                            <DescriptionIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item md={12} sm={12} xs={12} lg={12}>
                  <Typography variant="h6" sx={{ marginTop: "8px" }}>
                    Project Link (Hosted)
                  </Typography>
                  <TextField
                    margin="dense"
                    variant="outlined"
                    type="text"
                    name="link"
                    label={`Project Link`}
                    style={{ width: "100%" }}
                    value={project.link}
                    onChange={(event) => handleInputChange(index, event)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton>
                            <LinkIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item md={12} sm={12} xs={12} lg={12}>
                  <Typography
                    variant="h6"
                    sx={{
                      marginTop: "8px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <p>Project Tech Stack</p>
                    <p>
                      <Tooltip
                        title={
                          <Box sx={{ p: 1, fontSize: "0.9rem" }}>
                            {TechStack}
                          </Box>
                        }
                        placement="top"
                        arrow
                      >
                        <p style={{ fontSize: "1rem" }}>
                          <i className="fa-solid fa-circle-info"></i>
                        </p>
                      </Tooltip>
                    </p>
                  </Typography>
                  <TextField
                    margin="dense"
                    variant="outlined"
                    type="text"
                    name="techStack"
                    label={`Tech Stack`}
                    style={{ width: "100%" }}
                    value={project.techStack}
                    onChange={(event) => handleInputChange(index, event)}
                  />
                </Grid>
              </Grid>
            </div>
          ))}
          <Button
            variant="contained"
            sx={{
              marginTop: "8px",
              backgroundColor: "var(--btn)",
              color: "black",
              "&:hover": { backgroundColor: "var(--btnHover)" },
              float: "right",
            }}
            onClick={handleAddProject}
          >
            Add Project
          </Button>
        </CardContent>
        <Grid container spacing={2} alignItems="center" lg={12}>
          <Grid item md={12} sm={12} xs={12} lg={12} style={containerStyles}>
            <Link to={"/resume-education"} style={linkStyle}>
              <ArrowBackIcon style={iconStyle} />
              <h4>Education Section</h4>
            </Link>
            <Link to={"/resume-experience"} style={linkStyle}>
              <h4>Experience Section</h4>
              <ArrowForwardIcon style={iconStyle} />
            </Link>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
};

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
  gap: "5px",
  transition: "border-radius 0.3s",
  borderRadius: "4px",
  padding: "5px",
};

const containerStyles = {
  marginBottom: "20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "20px",
  paddingRight: "40px",
  paddingLeft: "40px",
};

const iconStyle = {
  verticalAlign: "middle",
  marginLeft: "5px",
};

export default Projects;
