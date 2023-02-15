import React, {useState, useEffect} from 'react';
import '../../css/SignInButton.css';
import { useNavigate } from "react-router-dom";

const SignUpButton = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem('Credentials');
    if (email === (`${email}`)) {
      setIsSignedIn(false);
    }
  }, []);


  const RouteChange = () => {
    navigate("/register");
  }



  return (
    <div>
      {isSignedIn ?(
      
     
      <button className="sign-Up-button" onClick={RouteChange}>Sign Up</button>
      ):(
        <h1></h1>
      )}
    </div>
    

    
  );
};
export default SignUpButton;