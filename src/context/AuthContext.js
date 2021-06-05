import React, { useEffect, useState, createContext, useContext } from "react";
import { auth, firebase } from "../utils/firebase";

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        setUser(null);
        return true;
      })
      .catch((error) => {
        return error;
      });
  };
  const googleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/userinfo.email");
    if (!user || user === null) {
      auth.signInWithRedirect(provider);
      // auth
      //   .getRedirectResult()
      //   .then((result) => {
      //     // if (result.credential) {
      //     //   const credential = result.credential;
      //     //   const token = credential.accessToken;
      //     // }
      //     const user = result.user;
      //     // setUser(user);
      //   })
      //   .catch((error) => {
      //     alert(
      //       "An account with same email already exists on different provider. Try signing in with other provider"
      //     );
      //   });
    }
  };
  const githubSignIn = () => {
    const provider = new firebase.auth.GithubAuthProvider();
    provider.addScope("read:user");
    if (!user || user === null) {
      auth.signInWithRedirect(provider);
      // auth
      //   .getRedirectResult()
      //   .then((result) => {
      //     const user = result.user;
      //     console.log("USER ", user);

      //     setUser(user);
      //   })
      //   .catch((error) => {
      //     alert(
      //       "An account with same email already exists on different provider. Try signing in with other provider"
      //     );
      //   });
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    user,
    setUser,
    signOut,
    googleSignIn,
    githubSignIn,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
