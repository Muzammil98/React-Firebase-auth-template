import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Popper,
  IconButton,
  Fade,
  Paper,
  Slide,
  Button,
} from "@material-ui/core";
import { AiFillInfoCircle } from "react-icons/ai";

import Figma from "../assets/FigmaSvg";
import Linkedin from "../assets/LinkedinSvg";
import Github from "../assets/GithubSvg";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px 40px",
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
    width: "60%",
    marginLeft: "auto",
    borderRadius: "20px",
    "& .about-container, & .connect-container": {
      marginBottom: "20px",
    },
    "& .heading": {
      fontSize: "17px",
      marginBottom: "5px",
    },
    "& .para": {
      fontSize: "14px",
    },
    "& .button-wrapper": {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      "& li": {
        listStyleType: "none",
        marginRight: "10px",
      },
    },
  },
  btn: {
    background: "#E9E8E8",
    boxShadow: "none",
    color: "#000",
    textTransform: "capitalize",
    borderRadius: "7px",
    padding: "5px 20px",
    fontSize: "12px",
    "&:hover": {
      boxShadow: "none",
    },
    "& .MuiButton-endIcon": {
      width: "18px",
    },
  },
  infoButton: {
    position: "absolute",
    top: "0",
    right: "10px",
    color: "white",
    fontSize: "30px",
    zIndex: 99,
  },
}));

const InfoPopper = () => {
  const DESIGN_URL =
    "https://www.figma.com/file/lhya7sk5vmf7DYaxrezg80/Clean-Expense-Tracker?node-id=117%3A2";
  const CODE_URL = "https://github.com/Muzammil98/React-Firebase-auth-template";

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();
  const classes = useStyles();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <>
      <Popper
        styles={{ zIndex: 1 }}
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            {/* <Slide direction="down" timeout={350} in={open} mountOnEnter unmountOnExit> */}
            <Paper className={classes.root}>
              <div className="about-container">
                <h5 className="heading">About</h5>
                <p className="para">
                  Hi, i’m Muzammil Sarwar a Full-Stack developer. This app was
                  hand-crafted design and developed
                </p>
              </div>
              <div className="connect-container">
                <h5 className="heading">Connect with me</h5>
                <ul className="button-wrapper">
                  <li className="button-item">
                    <Button
                      variant="contained"
                      href="https://github.com/Muzammil98"
                      target="_blank"
                      endIcon={<Github />}
                      className={classes.btn}
                      size="small"
                    >
                      Profile
                    </Button>
                  </li>
                  <li className="button-item">
                    <Button
                      variant="contained"
                      href="https://www.linkedin.com/in/muzammil-s/"
                      target="_blank"
                      endIcon={<Linkedin />}
                      className={classes.btn}
                    >
                      Profile
                    </Button>
                  </li>
                </ul>
              </div>
              <div className="connect-container">
                <h5 className="heading">Source</h5>
                <ul className="button-wrapper">
                  <li className="button-item">
                    <Button
                      variant="contained"
                      href={CODE_URL}
                      target="_blank"
                      endIcon={<Github />}
                      className={classes.btn}
                    >
                      Code
                    </Button>
                  </li>
                  <li className="button-item">
                    <Button
                      variant="contained"
                      href={DESIGN_URL}
                      target="_blank"
                      endIcon={<Figma />}
                      className={classes.btn}
                    >
                      Design
                    </Button>
                  </li>
                </ul>
              </div>
            </Paper>
            {/* </Slide> */}
          </Fade>
        )}
      </Popper>
      <IconButton
        className={classes.infoButton}
        onClick={handleClick("bottom-end")}
      >
        <AiFillInfoCircle />
      </IconButton>
    </>
  );
};

export default InfoPopper;
