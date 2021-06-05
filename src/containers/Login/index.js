import React from "react";
import { useAuth } from "../../context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { Button, Typography } from "@material-ui/core";
const Login = () => {
  const { user, googleSignIn, githubSignIn } = useAuth();

  const handleSignIn = (provider) => {
    if (provider === "google") {
      googleSignIn();
    } else {
      githubSignIn();
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h3 style={{ marginBottom: "10px", fontWeight: "300" }}>
        To login please continue with
      </h3>
      <div style={{display: "flex",flexDirection: "column",justifyContent: "center",}}>
        <Button
          primary
          variant="contained"
          endIcon={<FcGoogle />}
          style={{
            color: "#FFF",
            background:"#474265",
            marginBottom:"5px"
          }}
          onClick={() => handleSignIn("google")}
        >
          google
        </Button>
        <Button
          primary
          variant="contained"
          endIcon={<FaGithub />}
          style={{
            color: "#FFF",
            background:"#474265",
            marginBottom:"5px"
          }}
          onClick={() => handleSignIn("google")}
        >
          github
        </Button>
      </div>
    </div>
  );
};

export default Login;
