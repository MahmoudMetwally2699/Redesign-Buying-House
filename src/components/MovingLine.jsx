import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const MovingLine = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#182848",
        color: "#fff",
        padding: "0.5rem 0",
      }}
    >
      <Box
        sx={{
          display: "inline-block",
          whiteSpace: "nowrap",
          animation: "scroll 10s linear infinite",
          "@keyframes scroll": {
            "0%": { transform: "translateX(100%)" },
            "100%": { transform: "translateX(-100%)" },
          },
        }}
      >
        {[
          "Demo New",
          "Computer Operator",
          "Marchandiser",
          "Job By Agent",
          "This Job By Seller",
          "HR of Buying.house",
          "Marketing Head Of Buying.house",
          "Auctions Now Open",
        ].map((text, index) => (
          <Typography
            key={index}
            variant="body1"
            sx={{
              display: "inline-block",
              marginRight: "2rem",
              fontWeight: 600,
              color: "#FFCF33",
              fontSize: "1rem",
              "&:hover": {
                textDecoration: "underline",
                color: "#fff",
              },
            }}
          >
            {text}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default MovingLine;
