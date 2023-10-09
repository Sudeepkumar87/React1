import React, { useState } from "react";
import { Modal, Typography, style, Box } from "@mui/material";
import tick from "./Assets/tick.svg";
import classes from "./Name.module.css";
const Name = (props) => {
  console.log(props.cartIsShown, "Rahul");
  return (
    <Modal
      open={props.cartIsShown}
      onClose={() => props.setCartIsShown(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className={classes.mainModel}
    >
      <Box sx={{ backgroundColor: "white", padding: "30px" }}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          style={{ textAlign: "center" }}
        >
          <img src={tick} className={classes.maintick} />
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2, paddingTop: "3rem" }}
        >
          <p className={classes.mainPara}>Added to Cart Succesfully</p>
        </Typography>
      </Box>
    </Modal>
  );
};

export default Name;
