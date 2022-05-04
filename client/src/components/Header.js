import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import ChatIcon from "@mui/icons-material/Chat";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon className="header__icon" />
      </IconButton>
      <img
        src="https://imgs.search.brave.com/ItxSs8J0UKSZpElokSmMhqfkmTAaqxTfxExasjr6phQ/rs:fit:346:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5t/Zkl6c0xVcWg2cjJN/eWJmd1BmRnZRSGFL/SSZwaWQ9QXBp"
        alt="tinder logo"
        className="header__logo"
      />
      <IconButton>
        <ChatIcon className="header__icon"/>
      </IconButton>
    </div>
  );
}

export default Header;
