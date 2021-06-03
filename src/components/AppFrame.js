import React, { useContext } from "react";
import {
  auth,
  googleSignInPopup,
  signOut,
  githubSignInPopup,
} from "../utils/firebase";
import { AuthContext } from "../context/AuthContext";
import ExpenseTracker from "../containers/ExpenseTracker";
import Login from "../containers/Login";

const AppFrame = () => {
  const { user, setUser } = useContext(AuthContext);

  

  if (user) {
    return <ExpenseTracker />;
  }
  return <Login />;
};

export default AppFrame;
