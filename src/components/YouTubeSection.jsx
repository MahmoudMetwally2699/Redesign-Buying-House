import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const YouTubeSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Card
        sx={{
          maxWidth: "900px",
          width: "100%",
          borderRadius: "15px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <CardContent
          sx={{
            padding: "2rem",
            textAlign: "center",
          }}
        >
          {/* Title */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              fontFamily: "'Poppins', sans-serif",
              marginBottom: "1rem",
              color: "#003c8f",
            }}
          >
            Live Sell On
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              marginBottom: "1.5rem",
              color: "#555",
            }}
          >
            Live Sell Notice Title <br />
            Live Sell Notice Description
          </Typography>

          {/* YouTube Video Embed */}
          <Box
            sx={{
              position: "relative",
              paddingBottom: "56.25%", // Aspect ratio 16:9
              height: 0,
              overflow: "hidden",
              borderRadius: "10px",
              marginBottom: "1.5rem",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/DwF-zadBeWY" // Correct YouTube embed URL
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            ></iframe>
          </Box>

          {/* Signup/Login Button */}
          <Typography
            variant="body2"
            sx={{
              color: "#555",
              marginBottom: "1rem",
            }}
          >
            Please login first to place your order!
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#d32f2f",
              color: "#fff",
              padding: "0.8rem 2rem",
              borderRadius: "20px",
              textTransform: "capitalize",
              "&:hover": {
                backgroundColor: "#b71c1c",
              },
            }}
          >
            Signup/Login
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default YouTubeSection;
