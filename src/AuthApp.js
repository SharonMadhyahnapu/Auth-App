
import { createContext, useRef, useState } from "react";
import  Signup  from "./Singup";
import "./auth-app.scss";
import Auth from "./auth"
import Login  from "./Login.js";


const AuthApp = () => {
  const authRef = useRef(new Auth());
  const [showLogin, setShowLogin] = useState(false);
 

  const toggleForm = () => setShowLogin(!showLogin);
 

  return (
    <div className="container">
      {showLogin ? (
        <Login auth={authRef.current} toggleForm={toggleForm} />
      ) : (
        <Signup auth={authRef.current} toggleForm={toggleForm} />
      )}
    </div>
  );
};

export default AuthApp;
