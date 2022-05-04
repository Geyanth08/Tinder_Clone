import React from "react";
import "./SwipeButtons.css";
import ReplyIcon from "@mui/icons-material/Reply";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__icon">
        <ReplyIcon className="swipeButton__reply" />
      </IconButton>
      <IconButton className="swipeButtons__icon">
        <CloseIcon className="swipeButton__close" />
      </IconButton>
      <IconButton className="swipeButtons__icon">
        <StarRateIcon className="swipeButton__star" />
      </IconButton>
      <IconButton className="swipeButtons__icon">
        <FavoriteIcon className="swipeButton__favorite" />
      </IconButton>
      <IconButton className="swipeButtons__icon">
        <FlashOnIcon className="swipeButton__flash" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
