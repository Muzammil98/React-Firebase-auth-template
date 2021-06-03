import React, { useContext } from "react";
import {
  auth,
  googleSignInPopup,
  signOut,
  githubSignInPopup,
} from "../../utils/firebase";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const { user, setUser } = useContext(AuthContext);

  const signIn = (provider) => {
    if (provider === "google") {
      googleSignInPopup
        .then((res) => {
          console.log("RES google", res);
          setUser(res);
        })
        .catch((err) => console.error(err));
    } else {
      githubSignInPopup
        .then((res) => {
          console.log("RES github", res);
          setUser(res);
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div>
      <button onClick={() => signIn("google")}>Continue with google</button>
      {/* <button onClick={() => signIn("github")}>Continue with github</button> */}
    </div>
  );
};

export default Login;
