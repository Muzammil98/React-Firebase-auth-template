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
    return new Promise((resolve, reject) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope("https://www.googleapis.com/auth/userinfo.email");
      if (!user || user === null) {
        auth.signInWithRedirect(provider);
        auth
          .getRedirectResult()
          .then((result) => {
            const user = result.user;
            resolve(user);
          })
          .catch((error) => {
            reject(error);
          });
      }
    });
  };
  const githubSignIn = () => {
    return new Promise((resolve, reject) => {
      const provider = new firebase.auth.GithubAuthProvider();
      provider.addScope("read:user");
      if (!user || user === null) {
        auth.signInWithRedirect(provider);
        auth
          .getRedirectResult()
          .then((result) => {
            const user = result.user;
            resolve(user);
          })
          .catch((error) => {
            reject(error);
          });
      }
    });
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
