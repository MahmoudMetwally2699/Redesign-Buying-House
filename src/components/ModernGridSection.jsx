import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

const categories = [
  { title: "Fiber & Feed Stock", image: "/logohouse.webp" },
  { title: "Home Textile", image: "/logohouse.webp" },
  { title: "Robotics & AI", image: "/logohouse.webp" },
  { title: "Yarn", image: "/logohouse.webp" },
  { title: "Dyes & Chemical", image: "/logohouse.webp" },
  { title: "Fashion Accessories", image: "/logohouse.webp" },
  { title: "Fabrics", image: "/logohouse.webp" },
  { title: "Garments & Textile", image: "/logohouse.webp" },
  { title: "Organic Product", image: "/logohouse.webp" },

];

const ModernGridSection = () => {
  return (
    <Box
      sx={{
        padding: "2rem",
        backgroundColor: "#f9f9f9",
        borderRadius: "15px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          fontWeight: 700,
          fontFamily: "'Poppins', sans-serif",
          color: "#003c8f",
          marginBottom: "2rem",
          textTransform: "uppercase",
        }}
      >
        Garments & Textile
      </Typography>

      {/* Grid Layout */}
      <Grid container spacing={4}>
        {categories.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={index}> {/* Adjust grid size */}
            <Card
              sx={{
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="120"
                image={item.image}
                alt={item.title}
                sx={{
                  borderTopLeftRadius: "15px",
                  borderTopRightRadius: "15px",
                }}
              />
              <CardContent
                sx={{
                  textAlign: "center",
                  backgroundColor: "#ffffff",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 600,
                    color: "#333",
                  }}
                >
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ModernGridSection;
