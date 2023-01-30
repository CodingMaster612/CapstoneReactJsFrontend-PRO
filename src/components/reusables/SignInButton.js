import React from 'react';
import '../../css/SignInButton.css';
import { useNavigate } from "react-router-dom";

const SignInButton = () => {
  const navigate = useNavigate(); 
  
  
  const RouteChange= () =>{
    navigate("/signIn");
  }
  
  
  
  return (
    <button className="sign-in-button" onClick={RouteChange}>Sign In</button>
  );
};
export default SignInButton;