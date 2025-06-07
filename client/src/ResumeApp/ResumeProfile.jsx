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
  Snackbar,
  Button,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Profile = () => {
  const [profile, setProfile] = useState(() => {
    // Load from localStorage on initial state
    const storedProfile = JSON.parse(localStorage.getItem("profileData"));
    return storedProfile || {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      aboutMe: "",
      address: "",
      linkedIn: "",
      github: "",
      codechef: "",
      leetcode: "",
      codeforces: "",
    };
  });
  const [open, setOpen] = useState(false);

  // Save to localStorage when profile state changes
  useEffect(() => {
    localStorage.setItem("profileData", JSON.stringify(profile));
  }, [profile]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  const handleSave = () => {
    localStorage.setItem("profileData", JSON.stringify(profile));
    setOpen(true);
  };

  const containerStyle = {
    marginTop: 30,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "var(--cardBg)",
  };

  return (
    <div style={containerStyle}>
      <Navbar />
      <Card>
        <CardHeader
          title={
            <Typography variant="h5" align="center" fontWeight="bold">
              Personal Details
            </Typography>
          }
        />
      </Card>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item md={6} sm={12}>
            <TextField
              margin="dense"
              variant="outlined"
              type="text"
              name="firstName"
              label="First Name"
              fullWidth
              required
              value={profile.firstName}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <PersonIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item md={6} sm={12}>
            <TextField
              margin="dense"
              variant="outlined"
              type="text"
              name="lastName"
              label="Last Name"
              fullWidth
              required
              value={profile.lastName}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <PersonIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item md={6} sm={12}>
            <TextField
              margin="dense"
              variant="outlined"
              type="email"
              name="email"
              label="Email"
              fullWidth
              required
              value={profile.email}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <EmailIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item md={6} sm={12}>
            <TextField
              margin="dense"
              variant="outlined"
              type="text"
              name="mobile"
              label="Mobile No"
              fullWidth
              required
              value={profile.mobile}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <PhoneIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item md={12} sm={12}>
            <TextField
              margin="dense"
              variant="outlined"
              type="text"
              name="aboutMe"
              label="About Me"
              multiline
              rows={3}
              fullWidth
              value={profile.aboutMe}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <PersonIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item md={12} sm={12}>
            <TextField
              margin="dense"
              variant="outlined"
              type="text"
              name="address"
              label="Address"
              fullWidth
              value={profile.address}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <HomeIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item md={6} sm={12}>
            <TextField
              margin="dense"
              variant="outlined"
              type="text"
              name="linkedIn"
              label="LinkedIn"
              fullWidth
              value={profile.linkedIn}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <LinkedInIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item md={6} sm={12}>
            <TextField
              margin="dense"
              variant="outlined"
              type="text"
              name="github"
              label="GitHub"
              fullWidth
              value={profile.github}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <GitHubIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item md={6} sm={12}>
            <TextField
              margin="dense"
              variant="outlined"
              type="text"
              name="codechef"
              label="Codechef"
              fullWidth
              value={profile.codechef}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <CodeIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item md={6} sm={12}>
            <TextField
              margin="dense"
              variant="outlined"
              type="text"
              name="leetcode"
              label="Leetcode"
              fullWidth
              value={profile.leetcode}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <CodeIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item md={12} sm={12}>
            <TextField
              margin="dense"
              variant="outlined"
              type="text"
              name="codeforces"
              label="Codeforces"
              fullWidth
              value={profile.codeforces}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <CodeIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>

        {/* Save Button */}
        <div style={{ textAlign: "right", marginTop: 20 }}>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
        </div>
      </CardContent>

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} style={containerStyles}>
          <Link to={"/resume-education"} style={linkStyle}>
            <h4>Education Section</h4>
            <ArrowForwardIcon style={iconStyle} />
          </Link>
        </Grid>
      </Grid>

      {/* Snackbar */}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        message="Profile saved successfully!"
      />
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
  justifyContent: "end",
  alignItems: "center",
  marginTop: "20px",
  paddingRight: "40px",
};

const iconStyle = {
  verticalAlign: "middle",
  marginLeft: "5px",
};

export default Profile;

