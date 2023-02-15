import React, {useState, useEffect} from 'react';
import '../../css/SignInButton.css';
import { useNavigate } from "react-router-dom";

const SignInButton = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);

  
  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem('Credentials');
    if (email === (`${email}`)) {
      setIsSignedIn(false);
    }
  }, []);

  const RouteChange = () => {
    navigate("/signIn");
  }



  return (
    <div>
      {isSignedIn ?(
      <button className="sign-in-button" onClick={RouteChange}>Sign In</button>
      ):(
        <h1></h1>
      )}
    </div>
  );
};
export default SignInButton;