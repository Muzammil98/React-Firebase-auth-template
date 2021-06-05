import React, { useContext } from "react";
import { auth } from "../../utils/firebase";
import { useAuth } from "../../context/AuthContext";
import { IconButton, Button } from "@material-ui/core";
import { FiPower } from "react-icons/fi";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {},
  logoutBtn: {
    position: "absolute",
    top: "0",
    color: "#bd3333",
    fontSize: "30px",
    left: "10px",
  },
}));
const ExpenseTracker = () => {
  const clasess = useStyles();
  const { user, signOut } = useAuth();
  const handleSignOut = () => {
    signOut();
  };

  return (
    <div>
      <h3 style={{ marginBottom: "10px", fontWeight: "300" }}>
        Hello, {user ? user.displayName : "user"}
      </h3>
      <IconButton className={clasess.logoutBtn} onClick={() => handleSignOut()}>
        <FiPower />
      </IconButton>
    </div>
  );
};

export default ExpenseTracker;
