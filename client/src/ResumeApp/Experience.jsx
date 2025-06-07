import React, { useEffect, useState } from "react";
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
import DescriptionIcon from "@mui/icons-material/Description";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Experience = () => {
  const [experiences, setExperiences] = useState(() => {
    // Load from localStorage on initial state
    const storedExperiences = JSON.parse(
      localStorage.getItem("experienceData")
    );
    return storedExperiences || [];
  });

  // Save to localStorage when experiences state changes
  useEffect(() => {
    localStorage.setItem("experienceData", JSON.stringify(experiences));
  }, [experiences]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedExperiences = experiences.map((experience, i) =>
      i === index ? { ...experience, [name]: value } : experience
    );
    setExperiences(updatedExperiences);
  };

  const handleAddExperience = () => {
    const newExperience = {
      role: "",
      institute: "",
      start_date: "",
      end_date: "",
      desc: "",
    };
    setExperiences([...experiences, newExperience]);
  };

  const handleDeleteExperience = (index) => {
    const updatedExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(updatedExperiences);
  };

  const containerStyle = {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  };

  const contentExpr = (
    <div>
      <p>1. Provide a description of the project.</p>
      <p>eg.</p>
      <p>Streamlined project management process using MERN stack.</p>
      <p>Integrated Material-UI and React for intuitive user interface.</p>
      <p>
        Implemented Redux for centralized state management and seamless data
        flow.
      </p>
    </div>
  );

  return (
    <div style={containerStyle}>
      <Navbar />
      <Card>
        <CardHeader
          title={
            <Typography variant="h5" align="center" fontWeight="bold">
              Experience Details
            </Typography>
          }
        />
      </Card>
      <CardContent>
        {experiences.map((experience, index) => (
          <div key={index}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h5" sx={{ marginTop: "8px" }}>
                Experience {index + 1}
              </Typography>
              <IconButton onClick={() => handleDeleteExperience(index)}>
                <DeleteIcon color="error" />
              </IconButton>
            </div>
            <Grid container spacing={1} alignItems="center" lg={12}>
              <Grid item md={12} sm={12} xs={12} lg={12}>
                <Typography variant="h6" sx={{ marginTop: "8px" }}>
                  Role
                </Typography>
                <TextField
                  margin="dense"
                  variant="outlined"
                  type="text"
                  name="role"
                  label="Role"
                  style={{ width: "100%" }}
                  value={experience.role}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="center" lg={12}>
              <Grid item md={12} sm={12} xs={12} lg={12}>
                <Typography variant="h6" sx={{ marginTop: "8px" }}>
                  Institute/Organisation
                </Typography>
                <TextField
                  margin="dense"
                  variant="outlined"
                  type="text"
                  name="institute"
                  label="Institute/Organisation"
                  style={{ width: "100%" }}
                  value={experience.institute}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} alignItems="center" lg={12} mb={2}>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <Typography variant="h6" sx={{ marginTop: "8px" }}>
                  Start Date
                </Typography>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="start_date"
                  type="date"
                  style={{ width: "100%" }}
                  value={experience.start_date}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <Typography variant="h6" sx={{ marginTop: "8px" }}>
                  End Date
                </Typography>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="end_date"
                  type="date"
                  style={{ width: "100%" }}
                  value={experience.end_date}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="center" lg={12}>
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
                  <p style={{ display: "flex", gap: 3, alignItems: "center" }}>
                    Description
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
                  <p>
                    <Tooltip
                      title={
                        <Box sx={{ p: 1, fontSize: "0.9rem" }}>
                          {contentExpr}
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
                  multiline
                  rows={4}
                  name="desc"
                  label="Description"
                  style={{ width: "100%" }}
                  value={experience.desc}
                  onChange={(event) => handleInputChange(index, event)}
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
          onClick={handleAddExperience}
        >
          Add Experience
        </Button>
      </CardContent>

      <Grid container spacing={2} alignItems="center" lg={12}>
        <Grid item md={12} sm={12} xs={12} lg={12} style={containerStyles}>
          <Link to={"/resume-projects"} style={linkStyle}>
            <ArrowBackIcon style={iconStyle} />
            <h4>Project Section</h4>
          </Link>
          <Link to={"/resume-extraDetails"} style={linkStyle}>
            <h4>ExtraDetails Section</h4>
            <ArrowForwardIcon style={iconStyle} />
          </Link>
        </Grid>
      </Grid>
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

export default Experience;
