import React, { useState } from "react";
import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      elevation={2}
      sx={{ backgroundColor: "#f4f4f4", position: "sticky", top: "0px" }}
    >
      <Toolbar>
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            padding: "10px 0px",
          }}
        >
          {/* logo */}
          <Box>
            <IconButton>
              <ShoppingBasketIcon sx={{ fontSize: "2.4rem" }} />
            </IconButton>
          </Box>
          {/* Links */}
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}
            >
              Home
            </Typography>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}
            >
              Brand
            </Typography>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={openMenu ? "true" : undefined}
              onClick={handleClick}
            >
              Categories
            </Typography>
            {/* Dropdown Items */}
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Men</MenuItem>
              <MenuItem onClick={handleClose}>Women</MenuItem>
              <MenuItem onClick={handleClose}>Phones</MenuItem>
              <MenuItem onClick={handleClose}>Accessories</MenuItem>
              <MenuItem onClick={handleClose}>Others</MenuItem>
            </Menu>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}
            >
              Men
            </Typography>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}
            >
              Women
            </Typography>
            <Typography
              sx={{ marginRight: "20px", cursor: "pointer", color: "#616161" }}
            >
              FAQ
            </Typography>
          </Box>
          {/* Button Links */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              sx={{ backgroundColor: "#ff4081" }}
              variant="contained"
              disableElevation
            >
              Account
            </Button>
            <IconButton>
              <Badge badgeContent={4} color="primary">
                <LocalGroceryStoreIcon color="action" />
              </Badge>
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
