import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Popper, IconButton, Fade, Paper, Slide,Button } from "@material-ui/core";
import { AiFillInfoCircle } from "react-icons/ai";
const useStyles = makeStyles((theme) => ({
  root: {},
  infoButton: {
    position: "absolute",
    top: "0",
    right: "10px",
    color: "white",
    fontSize: "30px",
  },
}));

const InfoPopper = () => {
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
      <Popper styles={{zIndex:1}} open={open} anchorEl={anchorEl} placement={placement} transition>
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
                    <Button>
                      Profile <span>Github</span>
                    </Button>
                  </li>
                  <li className="button-item">
                    <Button>
                      Profile <span>Linkedin</span>
                    </Button>
                  </li>
                </ul>
              </div>
              <div className="connect-container">
                <h5 className="heading">Source</h5>
                <ul className="button-wrapper">
                  <li className="button-item">
                    <Button>
                      Code <span>Github</span>
                    </Button>
                  </li>
                  <li className="button-item">
                    <Button>
                      Design <span>Figma</span>
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
