import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import GradeIcon from "@mui/icons-material/Grade";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Education = () => {
  const [education, setEducation] = useState({
    college: "",
    University: "",
    field: "",
    branch: "",
    startYear: "",
    endYear: "",
    city: "",
    grades: "",
    higherCollege: "",
    startYear2: "",
    endYear2: "",
    city2: "",
    percentage: "",
    board1: "",
    school: "",
    startYear3: "",
    endYear3: "",
    city3: "",
    percentage2: "",
    board2: "",
  });

  // Load from localStorage on initial state
  useEffect(() => {
    const storedEducation = JSON.parse(localStorage.getItem("educationData"));
    if (storedEducation) {
      setEducation(storedEducation);
    }
  }, []);

  // Save to localStorage when education state changes
  useEffect(() => {
    localStorage.setItem("educationData", JSON.stringify(education));
  }, [education]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEducation((prevEducation) => ({ ...prevEducation, [name]: value }));
  };

  const containerStyle = {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  };

  const years = Array.from({ length: 30 }, (_, index) => 2030 - index);

  const engineeringFields = [
    "CS",
    "IT",
    "EnTC",
    "Electrical",
    "Mechanical",
    "Civil",
    "Chemical",
  ];
  const otherFields = ["B.E.", "B.Tech", "BCA", "Bsc", "MBA", "M.Tech"];

  const higherCollegeBoard = [
    "Maharashtra State Board",
    "CBSE",
    "ICSE",
    "Diploma",
    "Tamilnadu State Board",
  ];
  const schoolBoard = [
    "Maharashtra State Board",
    "CBSE",
    "ICSE",
    "Tamilnadu State Board",
  ];

  return (
    <div style={containerStyle}>
      <Navbar />
      <Card>
        <CardHeader
          title={
            <Typography variant="h5" align="center" fontWeight="bold">
              Educational Details
            </Typography>
          }
        />
      </Card>
      <CardContent>
        <div>
          {/* College Details */}
          <Grid container spacing={1} alignItems="center" lg={12}>
            <div>
              <Typography variant="h6" align="left">
                College/University Details
              </Typography>
            </div>
            {/* Row 1 */}
            <Grid container spacing={1} alignItems="center" lg={12} mb={2}>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  type="text"
                  name="college"
                  label="College Name"
                  style={{ width: "100%" }}
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton>
                          <SchoolIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  value={education.college}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  select
                  margin="dense"
                  variant="outlined"
                  name="University"
                  label="University"
                  style={{ width: "100%" }}
                  value={education.University}
                  onChange={handleChange}
                >
                  <MenuItem value="Anna university">Anna university</MenuItem>
                  <MenuItem value="Bharathiyar university">
                    Bharathiyar University
                  </MenuItem>
                  <MenuItem value="Annamalai University">
                    Annamalai university
                  </MenuItem>
                  <MenuItem value="">Clear Selection</MenuItem>
                </TextField>
              </Grid>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  select
                  margin="dense"
                  variant="outlined"
                  name="field"
                  label="Field of Study"
                  style={{ width: "100%" }}
                  required
                  value={education.field}
                  onChange={handleChange}
                >
                  <MenuItem value="" disabled>
                    Select Field
                  </MenuItem>
                  {otherFields.map((field) => (
                    <MenuItem key={field} value={field}>
                      {field}
                    </MenuItem>
                  ))}
                  <MenuItem value="">Clear Selection</MenuItem>
                </TextField>
              </Grid>
            </Grid>
            {/* Row 2 */}
            <Grid container spacing={1} alignItems="center" lg={12} mb={2}>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  select
                  margin="dense"
                  variant="outlined"
                  name="branch"
                  label="Select Branch"
                  style={{ width: "100%" }}
                  required
                  value={education.branch}
                  onChange={handleChange}
                >
                  <MenuItem value="" disabled>
                    Select Branch
                  </MenuItem>
                  {engineeringFields.map((field) => (
                    <MenuItem key={field} value={field}>
                      {field}
                    </MenuItem>
                  ))}
                  <MenuItem value="">Clear Selection</MenuItem>
                </TextField>
              </Grid>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  select
                  margin="dense"
                  variant="outlined"
                  name="startYear"
                  label="Start Year"
                  style={{ width: "100%" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton>
                          <EventIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  value={education.startYear}
                  onChange={handleChange}
                >
                  <MenuItem value="" disabled>
                    Select Year
                  </MenuItem>
                  {years.map((year) => (
                    <MenuItem key={year} value={year}>
                      {year}
                    </MenuItem>
                  ))}
                  <MenuItem value="">Clear Selection</MenuItem>
                </TextField>
              </Grid>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  select
                  margin="dense"
                  variant="outlined"
                  name="endYear"
                  label="End Year"
                  style={{ width: "100%" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton>
                          <EventIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  value={education.endYear}
                  onChange={handleChange}
                >
                  <MenuItem value="" disabled>
                    Select Year
                  </MenuItem>
                  {years.map((year) => (
                    <MenuItem key={year} value={year}>
                      {year}
                    </MenuItem>
                  ))}
                  <MenuItem value="">Clear Selection</MenuItem>
                </TextField>
              </Grid>
            </Grid>
            {/* Row 3 */}
            <Grid container spacing={1} alignItems="center" lg={12} mb={2}>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="city"
                  label="City"
                  style={{ width: "100%" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton>
                          <LocationCityIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  value={education.city}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  name="grades"
                  label="CGPA"
                  style={{ width: "100%" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton>
                          <GradeIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  value={education.grades}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Grid>
          {/* 12th Details */}
          <Grid container spacing={1} alignItems="center" lg={12} mt={2}>
            <div>
              <Typography variant="h6" align="left">
                Higher Secondary Education (12th) Details
              </Typography>
            </div>
            {/* Row 1 */}
            <Grid container spacing={1} alignItems="center" lg={12}>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  type="text"
                  name="higherCollege"
                  label="College Name"
                  style={{ width: "100%" }}
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton>
                          <SchoolIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  value={education.higherCollege}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  select
                  margin="dense"
                  variant="outlined"
                  name="startYear2"
                  label="Start Year"
                  style={{ width: "100%" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton>
                          <EventIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  value={education.startYear2}
                  onChange={handleChange}
                >
                  <MenuItem value="" disabled>
                    Select Year
                  </MenuItem>
                  {years.map((year) => (
                    <MenuItem key={year} value={year}>
                      {year}
                    </MenuItem>
                  ))}
                  <MenuItem value="">Clear Selection</MenuItem>
                </TextField>
              </Grid>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  select
                  margin="dense"
                  variant="outlined"
                  name="endYear2"
                  label="End Year"
                  style={{ width: "100%" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton>
                          <EventIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  value={education.endYear2}
                  onChange={handleChange}
                >
                  <MenuItem value="" disabled>
                    Select Year
                  </MenuItem>
                  {years.map((year) => (
                    <MenuItem key={year} value={year}>
                      {year}
                    </MenuItem>
                  ))}
                  <MenuItem value="">Clear Selection</MenuItem>
                </TextField>
              </Grid>
            </Grid>
            {/* Row 2 */}
            <Grid container spacing={1} alignItems="center" lg={12}>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  type="text"
                  name="city2"
                  label="City"
                  style={{ width: "100%" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton>
                          <LocationCityIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  value={education.city2}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  type="text"
                  name="percentage"
                  label="Percentage"
                  style={{ width: "100%" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton>
                          <GradeIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  value={education.percentage}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  select
                  margin="dense"
                  variant="outlined"
                  name="board1"
                  placeholder="Select Board"
                  label="Select Board"
                  style={{ width: "100%" }}
                  required
                  value={education.board1}
                  onChange={handleChange}
                >
                  <MenuItem value="" disabled>
                    Select Board
                  </MenuItem>
                  {higherCollegeBoard.map((field) => (
                    <MenuItem key={field} value={field}>
                      {field}
                    </MenuItem>
                  ))}
                  <MenuItem value="">Clear Selection</MenuItem>
                </TextField>
              </Grid>
            </Grid>
          </Grid>
          {/* 10th Details */}
          <Grid container spacing={1} alignItems="center" lg={12} mt={2}>
            <div>
              <Typography variant="h6" align="left">
                Secondary Education (10th) Details
              </Typography>
            </div>
            {/* Row 1 */}
            <Grid container spacing={1} alignItems="center" lg={12}>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  type="text"
                  name="school"
                  label="School Name"
                  style={{ width: "100%" }}
                  value={education.school}
                  required
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton>
                          <SchoolIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  select
                  margin="dense"
                  variant="outlined"
                  name="startYear3"
                  label="Start Year"
                  style={{ width: "100%" }}
                  onChange={handleChange}
                  value={education.startYear3}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton>
                          <EventIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                >
                  <MenuItem value="" disabled>
                    Select Year
                  </MenuItem>
                  {years.map((year) => (
                    <MenuItem key={year} value={year}>
                      {year}
                    </MenuItem>
                  ))}
                  <MenuItem value="">Clear Selection</MenuItem>
                </TextField>
              </Grid>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  select
                  margin="dense"
                  variant="outlined"
                  name="endYear3"
                  label="End Year"
                  style={{ width: "100%" }}
                  value={education.endYear3}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton>
                          <EventIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                >
                  <MenuItem value="" disabled>
                    Select Year
                  </MenuItem>
                  {years.map((year) => (
                    <MenuItem key={year} value={year}>
                      {year}
                    </MenuItem>
                  ))}
                  <MenuItem value="">Clear Selection</MenuItem>
                </TextField>
              </Grid>
            </Grid>
            {/* Row 2 */}
            <Grid container spacing={1} alignItems="center" lg={12}>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  type="text"
                  name="city3"
                  label="City"
                  style={{ width: "100%" }}
                  value={education.city3}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton>
                          <LocationCityIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  type="text"
                  name="percentage2"
                  label="Percentage"
                  style={{ width: "100%" }}
                  value={education.percentage2}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton>
                          <GradeIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  select
                  margin="dense"
                  variant="outlined"
                  name="board2"
                  placeholder="Select Board"
                  label="Select Board"
                  style={{ width: "100%" }}
                  required
                  value={education.board2}
                  onChange={handleChange}
                >
                  <MenuItem value="" disabled>
                    Select Board
                  </MenuItem>
                  {schoolBoard.map((field) => (
                    <MenuItem key={field} value={field}>
                      {field}
                    </MenuItem>
                  ))}
                  <MenuItem value="">Clear Selection</MenuItem>
                </TextField>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </CardContent>

      <Grid container spacing={2} alignItems="center" lg={12}>
        <Grid item md={12} sm={12} xs={12} lg={12} style={containerStyles}>
          <Link to={"/resume-profile"} style={linkStyle}>
            <ArrowBackIcon style={iconStyle} />
            <h4>Profile Section</h4>
          </Link>
          <Link to={"/resume-projects"} style={linkStyle}>
            <h4>Project Section</h4>
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

export default Education;
