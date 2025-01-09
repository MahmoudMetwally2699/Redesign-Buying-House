import React from "react";
import Slider from "react-slick";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const dealers = [
  {
    name: "Demo Dealer (Testing)",
    location: "United States - DEMO",
    contact: "+8801823532488 (WhatsApp)",
    verified: true,
  },
  {
    name: "John Doe",
    location: "Canada - Toronto",
    contact: "+1234567890",
    verified: true,
  },
  {
    name: "Jane Smith",
    location: "United Kingdom - London",
    contact: "+9876543210",
    verified: true,
  },
];

const ModernSlider = ({ title }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        padding: "2rem",
        borderRadius: "15px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        maxWidth: "900px",
        margin: "auto",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          boxShadow: "0 6px 25px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          fontWeight: 700,
          fontFamily: "'Poppins', sans-serif",
          marginBottom: "1.5rem",
          color: "#003c8f",
          textTransform: "uppercase",
          letterSpacing: "1px",
          "@media (max-width: 600px)": {
            fontSize: "1.2rem",
            textAlign: "center",
          },
        }}
      >
        {title}
      </Typography>
      <Slider {...settings}>
        {dealers.map((dealer, index) => (
          <Box
            key={index}
            sx={{
              padding: "2rem",
              textAlign: "center",
              backgroundColor: "white",
              borderRadius: "15px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
              margin: "0 1rem",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Box
              sx={{
                width: "100px",
                height: "100px",
                margin: "0 auto",
                backgroundColor: "#e0e0e0",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
                color: "#555",
                transition: "background-color 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: "#d0d0d0",
                },
              }}
            >
              <img
                src="/profile.png" // Replace with actual image URL
                alt={dealer.name}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                }}
              />
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                marginTop: "1rem",
                color: "#333",
              }}
            >
              {dealer.name}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#777",
                marginBottom: "0.5rem",
              }}
            >
              {dealer.location}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#777",
              }}
            >
              {dealer.contact}
            </Typography>
            {dealer.verified && (
              <Typography
                variant="caption"
                sx={{
                  color: "green",
                  fontWeight: 600,
                  display: "block",
                  marginTop: "0.5rem",
                }}
              >
                Account Verified
              </Typography>
            )}
            <Button
              variant="contained"
              sx={{
                marginTop: "1rem",
                backgroundColor: "#800000",
                color: "white",
                padding: "0.5rem 2rem",
                borderRadius: "25px",
                textTransform: "none",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "#5a0000",
                },
              }}
            >
              Send Message
            </Button>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ModernSlider;
