import React, { useContext } from "react";
import {
  auth,
  googleSignInPopup,
  signOut,
  githubSignInPopup,
} from "../../utils/firebase";
import { AuthContext } from "../../context/AuthContext";

const ExpenseTracker = () => {
  const { user, setUser } = useContext(AuthContext);
  const handleSignOut = () => {
    setUser(null);
    signOut();
  };

  return (
    <div>
      Hello, {user.displayName}
      <button onClick={() => handleSignOut()}>SignOut</button>
    </div>
  );
};

export default ExpenseTracker;
