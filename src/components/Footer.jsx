import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#003c8f",
        color: "#fff",
        padding: "3rem 2rem",
        marginTop: "2rem",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
        boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.1)",
        animation: "fadeIn 1s ease-in-out",
        "@keyframes fadeIn": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      }}
    >
      {/* Footer Content */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginBottom: "2rem",
        }}
      >
        {/* Column 1: Company Info */}
        <Box
          sx={{
            minWidth: "200px",
            marginBottom: "1rem",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 700, marginBottom: "0.5rem" }}>
            Company
          </Typography>
          <Link href="#" underline="hover" sx={{ color: "#fff", display: "block", marginBottom: "0.3rem" }}>
            About Us
          </Link>
        </Box>

        {/* Column 2: Useful Links */}
        <Box
          sx={{
            minWidth: "200px",
            marginBottom: "1rem",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 700, marginBottom: "0.5rem" }}>
            Useful Links
          </Typography>
          <Link href="#" underline="hover" sx={{ color: "#fff", display: "block", marginBottom: "0.3rem" }}>
            About Buying.House
          </Link>
          <Link href="#" underline="hover" sx={{ color: "#fff", display: "block", marginBottom: "0.3rem" }}>
            CEO & Founder Message
          </Link>
          <Link href="#" underline="hover" sx={{ color: "#fff", display: "block", marginBottom: "0.3rem" }}>
            Product
          </Link>
        </Box>

        {/* Column 3: Contact Details */}
        <Box
          sx={{
            minWidth: "200px",
            marginBottom: "1rem",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 700, marginBottom: "0.5rem" }}>
            Address
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: "0.3rem" }}>
            Sugandha, Chittagong, Bangladesh
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: "0.3rem" }}>
            tayabuddin2013@gmail.com
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: "0.3rem" }}>
            +8801823532488 (WhatsApp)
          </Typography>
        </Box>

        {/* Column 4: Social Media */}
        <Box
          sx={{
            minWidth: "200px",
            marginBottom: "1rem",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 700, marginBottom: "0.5rem" }}>
            Follow Us
          </Typography>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Link href="https://facebook.com" target="_blank" sx={{ color: "#fff", fontSize: "1.5rem" }}>
              <i className="fab fa-facebook"></i>
            </Link>
            <Link href="https://twitter.com" target="_blank" sx={{ color: "#fff", fontSize: "1.5rem" }}>
              <i className="fab fa-twitter"></i>
            </Link>
            <Link href="https://youtube.com" target="_blank" sx={{ color: "#fff", fontSize: "1.5rem" }}>
              <i className="fab fa-youtube"></i>
            </Link>
            <Link href="https://instagram.com" target="_blank" sx={{ color: "#fff", fontSize: "1.5rem" }}>
              <i className="fab fa-instagram"></i>
            </Link>
          </Box>
        </Box>

        {/* Column 5: Track Order */}
        <Box
          sx={{
            minWidth: "200px",
            marginBottom: "1rem",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 700, marginBottom: "0.5rem" }}>
            Track Order
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#fff",
              color: "#003c8f",
              textTransform: "capitalize",
              borderRadius: "20px",
              padding: "0.5rem 1.5rem",
              "&:hover": { backgroundColor: "#d9d9d9" },
            }}
          >
            Track Order
          </Button>
        </Box>
      </Box>

      {/* Payment Methods */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        <i className="fab fa-cc-visa" style={{ fontSize: "2rem", color: "#fff" }}></i>
        <i className="fab fa-cc-mastercard" style={{ fontSize: "2rem", color: "#fff" }}></i>
        <i className="fab fa-cc-paypal" style={{ fontSize: "2rem", color: "#fff" }}></i>
        <i className="fab fa-cc-amex" style={{ fontSize: "2rem", color: "#fff" }}></i>
      </Box>

      {/* Copyright */}
      <Typography
        variant="body2"
        sx={{
          textAlign: "center",
          fontSize: "0.875rem",
          color: "#d9d9d9",
        }}
      >
        © Copyright by Buying.House 2016-2024
      </Typography>
    </Box>
  );
};

export default Footer;
