import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = () => (
    <Box
      sx={{ width: 250, padding: "1rem", backgroundColor: "#f9f9f9", height: "100%" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Typography
        variant="h6"
        sx={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 700,
          color: "#3f51b5",
          marginBottom: "1rem",
        }}
      >
        Menu
      </Typography>
      <Divider sx={{ marginBottom: "1rem" }} />
      <List>
        {[
          "Sell On BuyingHouse",
          "CEO & Owner Message",
          "Vendors / Dashboards",
          "Market Bazars",
          "Accounts",
          "Garments & Textile",
          "Stock Lots",
          "Boutique",
          "Handicraft & Cottage Industry",
          "Jute Products",
          "Leather Products",
          "Other Links",
        ].map((text, index) => (
          <ListItem button key={index} sx={{ borderRadius: "10px", marginBottom: "0.5rem", "&:hover": { backgroundColor: "#e0e0e0" } }}>
            <ListItemText primary={text} sx={{ textAlign: "center", color: "#3f51b5", fontWeight: 600 }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "white",
        color: "black",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        padding: "0.5rem 0",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Logo Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <img
            src="/logohouse.webp"
            alt="BuyingHouse Logo"
            style={{ height: "50px", cursor: "pointer" }}
          />
          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              color: "#3f51b5",
              cursor: "pointer",
            }}
          >
            BuyingHouse
          </Typography>
        </Box>

        {/* Main Buttons */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 2,
          }}
        >
          {[
            "Sell On BuyingHouse",
            "CEO & Owner Message",
            "Vendors / Dashboards",
            "Market Bazars",
            "Accounts",
          ].map((text, index) => (
            <Button
              key={index}
              sx={{
                color: "white",
                fontSize: "0.80rem", // Smaller font size
              textTransform: "capitalize",
              fontWeight: 600,
              padding: "0.2rem 0.5rem",
              borderRadius: "25px",
              background: "linear-gradient(135deg, #4b6cb7, #182848)",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              {text}
            </Button>
          ))}
        </Box>

        {/* Icons and Search */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* Search Bar */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              backgroundColor: "#f1f1f1",
              borderRadius: "25px",
              padding: "0.2rem 0.8rem",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              transition: "box-shadow 0.3s ease",
              "&:focus-within": {
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <InputBase
              placeholder="Search..."
              sx={{
                flexGrow: 1,
                fontSize: "1rem",
                color: "#333",
                padding: "0.2rem 0",
              }}
            />
            <IconButton>
              <SearchIcon sx={{ color: "#3f51b5" }} />
            </IconButton>
          </Box>

          {/* Settings and Cart Icons */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <IconButton>
              <SettingsIcon sx={{ color: "#3f51b5", transition: "transform 0.3s ease", "&:hover": { transform: "scale(1.2)" } }} />
            </IconButton>
            <IconButton>
              <ShoppingCartIcon sx={{ color: "#3f51b5", transition: "transform 0.3s ease", "&:hover": { transform: "scale(1.2)" } }} />
            </IconButton>
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon sx={{ color: "#3f51b5" }} />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Bottom Links */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          backgroundColor: "#f9f9f9",
          padding: "0.5rem 0",
          gap: 2,
          flexWrap: "wrap",
          boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        {[
          "Garments & Textile",
          "Stock Lots",
          "Boutique",
          "Handicraft & Cottage Industry",
          "Jute Products",
          "Leather Products",
          "Other Links",
        ].map((link, index) => (
          <Button
            key={index}
            sx={{
              textTransform: "capitalize",
              color: "#3f51b5",
              fontWeight: 500,
              padding: "0.3rem 0.8rem",
              borderRadius: "5px",
              transition: "color 0.3s ease, background 0.3s ease",
              "&:hover": {
                background: "#3f51b5",
                color: "white",
              },
            }}
          >
            {link}
          </Button>
        ))}
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {drawerList()}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
