import axios from "axios";
import { useState } from "react";
import BackgroundImage from '../../img/com.png';
import "../../App.css"
function RegisterBox() {
const [id, setId] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [username, setUsername] = useState("");
async function handleSubmit(event) {
event.preventDefault();
try {
await axios.post("http://localhost:8081/user/signUp",
{
id: id,
email: email,
password: password,
username: username,
});
alert("User Registation Successfully");
setId("");
setEmail("");
setPassword("");
setUsername("");
}
catch (err) {
alert("User Registation Failed");
}
}
return (
<header style={HeaderStyle}>
   <div className="register-container">
      <form className="register-form flex-col" onSubmit={handleSubmit}>
         <input className="input" type="text" name="id" placeholder="Enter your user id"
            onChange={(event) => {
         setId(event.target.value);
         }}
         />
         <input className="input" type="text" name="email" placeholder="Enter your Email Address..."
            onChange={(event) => {
         setEmail(event.target.value);
         }}
         />
         <input className="input  " type="text" name="password" placeholder=" Enter Password"
            onChange={(event) => {
         setPassword(event.target.value);
         }}
         />
         <input className="input  " type="text" name="username" placeholder=" Enter your username..."
            onChange={(event) => {
         setUsername(event.target.value);
         }}
         />
         <button className="button " type="submit">Register</button>
      </form>
   </div>
   <div className="left">
      <div className="container-left">
      </div>
   </div>
   <div className="right">
      <div className="container-right">
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
export default RegisterBox;