import axios from "axios";
import { useState } from "react";
import "../../App.css"
import BackgroundImage from '../../img/rain.png'
function SignInBox() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
async function handleSubmit(event) {
event.preventDefault();
try {
await axios.post("http://localhost:8081/user/signIn",
//use `` to have a path variable  ${propertyId}
{
email: email,
password: password,
});
alert("User sign in Successfully");
setEmail("");
setPassword("");
}
catch (err) {
alert("User login Failed");
}
}
return (
<header style={HeaderStyle}>
   <div className="register-container">
      <form className="register-form flex-col" onSubmit={handleSubmit}>
         <input className="input  " type="text"
            name="email"
            placeholder="Enter email"
            onChange={(event) => {
         setEmail(event.target.value);
         }}
         />
         <input className="input  " type="text"
            name="password"
            placeholder=" Enter your password..."
            onChange={(event) => {
         setPassword(event.target.value);
         }}
         />
         <button className="button" type="submit">sign in</button>
      </form>
      <div className="left">
         <div className="container-left">
         </div>
      </div>
      <div className="right">
         <div className="container-right">
         </div>
      </div>
   </div>
</header >
)
}
const HeaderStyle = {
width: "100%",
height: "100vh",
background: `url(${BackgroundImage})`,
backgroundPosition: "center",
backgroundRepeat: "no-repeat",
backgroundSize: "cover",
}
export default SignInBox;