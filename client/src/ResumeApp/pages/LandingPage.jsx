import React, { useState, useEffect } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { motion as Motion } from "framer-motion";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import "../styles/LandingPage.css";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import Navbar from "../../components/Navbar";
import Loader from "../../components/Loader";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#ff6f61" },
    text: { primary: "#333333", secondary: "#555555" },
  },
});

export default function LandingPage() {
  const navigate = useNavigate();
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [showLoader, setShowLoader] = useState(true);

  const handleGetStarted = () => {
    navigate("/resume-profile");
  };

  const handleImageLoad = () => {
    setImagesLoaded((count) => count + 1);
  };

  // Hide loader only after all images loaded AND 2 seconds elapsed
  useEffect(() => {
    if (imagesLoaded === 3) {
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 2000); // 2 seconds delay

      return () => clearTimeout(timer);
    }
  }, [imagesLoaded]);

  return (
    <div>
      <Navbar />
      <ThemeProvider theme={theme}>
        <Box className="box-container" style={{ position: "relative", minHeight: "80vh" }}>
          {showLoader && <Loader />}

          <div style={{ color: "black", opacity: showLoader ? 0.3 : 1, pointerEvents: showLoader ? "none" : "auto" }}>
            <div className="img-container">
              <div className="image-container-1">
                <img src={img1} alt="image1" className="image-style-1" onLoad={handleImageLoad} />
              </div>
              <div className="image-container-2">
                <img src={img2} alt="image2" className="image-style-2" onLoad={handleImageLoad} />
              </div>
              <div className="image-container-3">
                <img src={img3} alt="image3" className="image-style-3" onLoad={handleImageLoad} />
              </div>
            </div>

            <div>
              <div className="overlay-text">
                <Container maxWidth="md">
                  <Motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                  >
                    <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: "800" }}>
                      Build Your Professional Resume
                    </Typography>
                  </Motion.div>
                  <Motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    <Typography variant="h5" component="h1" gutterBottom>
                      Create a resume that stands out with our easy-to-use builder
                    </Typography>
                  </Motion.div>
                  <Motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    <Button
                      onClick={handleGetStarted}
                      variant="outlined"
                      sx={{
                        borderRadius: "30px",
                        color: "black",
                        backgroundColor: "var(--btnColor)",
                        "&:hover": {
                          backgroundColor: "var(--landBtnHover)",
                          border: "none",
                        },
                        border: "none",
                        fontWeight: 600,
                      }}
                      size="large"
                      disabled={showLoader}
                    >
                      Get Started
                    </Button>
                  </Motion.div>
                </Container>
              </div>
            </div>
          </div>
        </Box>
      </ThemeProvider>
    </div>
  );
}
