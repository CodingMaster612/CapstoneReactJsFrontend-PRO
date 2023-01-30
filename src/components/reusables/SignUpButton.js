import React from 'react';
import '../../css/SignInButton.css';
import { useNavigate } from "react-router-dom";

const SignUpButton = () => {
  const navigate = useNavigate(); 
  
  
  const RouteChange= () =>{
    navigate("/register");
  }
  
  
  
  return (
    <button className="sign-Up-button" onClick={RouteChange}>Sign Up</button>
  );
};
export default SignUpButton;