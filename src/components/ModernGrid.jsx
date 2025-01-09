import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const categories = [
  { title: "Garments & Textile", color: "#FF5733" },
  { title: "Boutique", color: "#FF69B4" },
  { title: "Stock Lots", color: "#00C9FF" },
  { title: "Handicraft & Cottage Industry", color: "#8A2BE2" },
  { title: "Jute Products", color: "#32CD32" },
  { title: "Leather Products", color: "#FF8C00" },
  { title: "Auction", color: "#A9A9A9" },
  { title: "Product Info & Sourcing", color: "#FFD700" },
  { title: "Live Sell", color: "#FF00FF" },
  { title: "Jobs", color: "#228B22" },
  { title: "Market Bazar Mall Shop", color: "#696969" },
  { title: "Affiliate Marketing", color: "#FF4500" },
];

const HorizontalSlider = () => {
  return (
    <Box
      sx={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        backgroundColor: "#f9f9f9",
        padding: "1rem 0",
        position: "relative",
      }}
    >
      <Box
        sx={{
            display: "inline-block",
            whiteSpace: "nowrap",
            animation: "scroll 30s linear infinite",
            "@keyframes scroll": {
              "0%": { transform: "translateX(100%)" },
              "100%": { transform: "translateX(-100%)" },
          },
        }}
      >
        {categories.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "inline-block",
              padding: "0.5rem 1rem",
              margin: "0 1rem",
              textAlign: "center",
              backgroundColor: item.color,
              color: "white",
              borderRadius: "15px",
              minWidth: "200px",
              fontWeight: "bold",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              "&:hover": {
                transform: "scale(1.1)",
                transition: "transform 0.1s ease",
              },
            }}
          >
            <Typography variant="body1">{item.title}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HorizontalSlider;
