import { useContext, useState, useEffect } from "react";
import { FirebaseContext } from "../context/firebase";

const useAuthListener = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("netflix-auth-user"))
  );

  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem("netflix-auth-user", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem("netflix-auth-user");
        setUser(null);
      }
    });
    return () => listener();
  }, []);

  return { user };
};
export default useAuthListener;
