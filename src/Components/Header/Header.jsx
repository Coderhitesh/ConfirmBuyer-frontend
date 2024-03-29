import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import "./header.css";
import { Link } from "react-router-dom";
// import InputBase from "@mui/material/InputBase";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "./logo.png";
// import { styled, alpha } from "@mui/material/styles";
const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [ShowsearchInput, setShowSearchInput] = useState(false);

  const [buyerSearchInput, setBuyerSearchInput] = useState("");
  const [searchMode, setSearchMode] = useState("buyer"); // Default mode is 'product'

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleBuyerSearchInput = (e) => {
    setBuyerSearchInput(e.target.value);
  };

  const handleShowInput = () => {
    setShowSearchInput(!ShowsearchInput);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (searchMode === "product") {
        sendSearchInput();
      } else if (searchMode === "buyer") {
        sendBuyerSearchInput();
      }
    }
  };

  

  const sendSearchInput = () => {
    if (searchInput.trim() !== "") {
      window.location.href = `/searchproduct/${searchInput}`;
    }
  };

  const sendBuyerSearchInput = () => {
    if (buyerSearchInput.trim() !== "") {
      window.location.href = `/BuyerSeacrhproduct/${buyerSearchInput}`;
    }
  };
  // Searching main

  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [open, setOpen] = useState(anchorEl);
  const handleClick = (event) => {
    setOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };
  const AuthToken = sessionStorage.getItem("token");
  // console.log(AuthToken);
  const data = [
    {
      id: 1,
      text: "Post Requirments",
      redirect: "/Post-Requirments",
    },
    {
      id: 2,
      text: "Companies",
      redirect: "/Companies",
    },
    {
      id: 3,
      text: "Buyers",
      redirect: "/Buyers",
    },
    {
      id: 4,
      text: "Plans",
      redirect: "/Plans",
    },
    {
      id: 5,
      text: "About",
      redirect: "/About",
    },

    {
      id: 7,
      text: "Profile",
    },
  ];

  const handleLogout = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("token");
    window.location.href = "/login";
  };
  const handleJoin = () => {
    window.location.href = "/Join-Confirm-buyers";
  };

  // console.log(data.itextd)
  const drawerContent = (
    <List className="back h-screen classss w-full">
      {data &&
        data.map((item, index) => (
          <ListItem key={index}>
            <Link
              className={`w-full text-white confirm-navigation hover:text-white ${
                item.id === 6 || item.id === 7 ? "button2" : ""
              }`}
              to={item.redirect}
              onClick={(e) => {
                if (item.id === 7) {
                  e.preventDefault();
                  handleClick();
                }
                // handleClose();
              }}
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <ListItemText className="text-bold" primary={item.text} />
            </Link>
          </ListItem>
        ))}
      <Typography>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom", // Change this to 'top'
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "top",
          }}
          getContentAnchorEl={null}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem>
            <Link to={"/admin/Myaccount"} onClick={handleClose}>
              My Account
            </Link>
          </MenuItem>

          <MenuItem
            onClick={() => {
              handleClose();
              handleJoin();
            }}
          >
            Join Now
          </MenuItem>

          <MenuItem onClick={handleClose}>Help</MenuItem>

          <MenuItem key="logout" onClick={handleLogout}>
            {AuthToken ? "Logout" : "Login"}
          </MenuItem>
        </Menu>
      </Typography>
    </List>
  );

  return (
    <div>
      <AppBar position="static">
        <Toolbar className="back gap-2 ">
          <Typography component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" className="flex items-center">
              {" "}
              <img
                src={logo}
                className="flex logo imgThirty items-center justify-center mt-2"
                alt="logo"
              />
            </Link>
          </Typography>

          <div
            className={`flexNo inputNavDown top768 items-center  ${
              ShowsearchInput ? "flex" : ""
            }`}
          >
            <div className="mr-4 normargin ">
              <select
                className="border selct p-2 text-black rounded"
                onChange={(e) => setSearchMode(e.target.value)}
              >
                <option className="py-2 text-black" value="buyer">
                  Buyer
                </option>
                <option className="py-2 text-black" value="product">
                  Product
                </option>
              </select>
            </div>

            {searchMode === "product" && (
              <div className={`flex divs-input w-[400px] items-center`}>
                <input
                  type="text"
                  className="border w-full p-2 text-black mr-2 rounded"
                  placeholder="Search Products..."
                  value={searchInput}
                  onKeyPress={handleKeyPress}
                  onChange={handleSearchInput}
                />
                <div className=" ab">
                  <ion-icon
                    name="search-outline"
                    className="cursor-pointer w-full text-black "
                    onClick={sendSearchInput}
                  ></ion-icon>
                </div>
              </div>
            )}

            {searchMode === "buyer" && (
              <div className="flex items-center divs-input  w-[400px]">
                <input
                  type="text"
                  className="border w-full p-2 text-black mr-2 rounded"
                  placeholder="Search here..."
                  value={buyerSearchInput}
                  onKeyPress={handleKeyPress}
                  onChange={handleBuyerSearchInput}
                />
                <div className=" ">
                  <ion-icon
                    name="search-outline"
                    className="cursor-pointer w-full text-black "
                    onClick={sendSearchInput}
                  ></ion-icon>
                </div>
              </div>
            )}
          </div>

          <div
            onClick={handleShowInput}
            className={`ab nb ${ShowsearchInput ? "flex" : "hidden"}`}
          >
            <ion-icon
              name="search-outline"
              className="cursor-pointer w-full text-black "
              onClick={sendSearchInput}
            ></ion-icon>
          </div>

          <IconButton
            edge="start"
            color="inherit"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        // Use the appropriate dark color class
        anchor="right"
        sx={{
          width: "300px",
          "& .MuiDrawer-paper": {
            width: "300px",
            background: "#910A67",
            padding: "2rem",
          },
        }}
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {drawerContent}
      </Drawer>
    </div>
  );
};

export default Header;
