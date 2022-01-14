import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import { Avatar, Menu } from "@mui/material";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";
import StarIcon from "@mui/icons-material/Star";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import PlaceSharpIcon from "@mui/icons-material/PlaceSharp";
import Settings from "@mui/icons-material/Settings";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/firebase-config";

const Dropdownbar = () => {
  const [dialogopen, setDiaLogOpen] = useState(true);

  

  const logout = async () => {
    await signOut(auth);

    localStorage.removeItem("email");
    localStorage.removeItem("name");
    localStorage.removeItem("profileURL");
    window.location.href = "/";
  };

  const profileURL = localStorage.getItem("profileURL");

  return (
    <nav>
      <Link to="/profile" style={{ textDecoration: "none", color: "black" }}>
        <MenuItem>
          <Avatar src={profileURL} sx={{ color: "#263238" }} />{" "}
          <li style={{ fontWeight: "bold" }}>帳戶資訊</li>
        </MenuItem>
      </Link>
      <Divider />
      <Link
        to="/journeyhome"
        style={{ textDecoration: "none", color: "black" }}
      >
        <MenuItem>
          <ListItemIcon>
            <PlaceSharpIcon sx={{ color: " #db3236" }} fontSize="medium" />
          </ListItemIcon>
          <li style={{ fontWeight: "bolder" }}>行程規劃</li>
        </MenuItem>
      </Link>
      <MenuItem>
        <ListItemIcon>
          <EditTwoToneIcon sx={{ color: "black" }} fontSize="medium" />
        </ListItemIcon>
        <li style={{ fontWeight: "bolder" }}>開始撰寫文章</li>
      </MenuItem>

      <Link to="/favorite" style={{ textDecoration: "none", color: "black" }}>
        <MenuItem>
          <ListItemIcon>
            <StarIcon fontSize="medium" sx={{ color: "#ffea00" }}></StarIcon>
          </ListItemIcon>
          <li style={{ fontWeight: "bolder" }}>個人收藏</li>
        </MenuItem>
      </Link>
      {/* <MenuItem>
                        <ListItemIcon>
                            <Settings fontSize="medium" />
                        </ListItemIcon>
                        Settings
                    </MenuItem> */}

      <MenuItem className="logout">
        <ListItemIcon sx={{ color: "black" }}>
          <Logout fontSize="medium" />
        </ListItemIcon>
        <li onClick={logout} style={{ fontWeight: "bolder" }}>
          登出
          
        </li>
      </MenuItem>
    </nav>
  );
};

const AlertDialog = ({ dialogopen }) => {
  const [open, setOpen] = useState({ dialogopen });

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Use Google's location service?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={handleClose} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Dropdownbar;
