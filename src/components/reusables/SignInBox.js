import axios from "axios";
import { useState } from "react";
import '../../css/signIn.css';
import { useNavigate } from 'react-router'

// import { useNavigate } from 'react-router'

function SignInBox() {
   //  const navigator = useNavigate()
   const navigator = useNavigate()
   const [user, setUser] = useState({
      email: "",
      password: ""
   })


   const changeHandler = (event) => {
      const name = event.target.name
      const value = event.target.value
      const tempUser = { ...user }
      tempUser[name] = value
      setUser(tempUser)
   }

   const submitHandler = () => {



      axios.post("http://localhost:8081/user/signIn", user)
         .then((response) => {

            console.log(response.data)
            localStorage.setItem("Credentials", response.data.email)
            navigator('/Home')

         }).catch((e) => {
            console.log(e.response)

         })

   }
   return (
      <header style={HeaderStyle}>
         <div className="container">
            <div className="screen">
               <div className="screen__content">
                  <div className="login">
                     <div className="login__field">
                        <i className="login__icon fas fa-user"></i>
                        <input placeholder="email" type="text" className="login__input" onChange={changeHandler} name="email" value={user.email} />
                     </div>
                     <div className="login__field">
                        <i className="login__icon fas fa-lock"></i>
                        <input placeholder="Password" type="password" className="login__input" onChange={changeHandler} name="password" value={user.password} />

                     </div>

                     <button className="button login__submit" onClick={submitHandler}>

                        <span className="button__text">Sign In Now</span>
                        <i className="button__icon fas fa-chevron-right"></i>
                     </button>
                  </div>
                  <div className="social-login">
                     <h3>Sign In</h3>
                     <div className="social-icons">
                        <a href="#" className="social-login__icon fab fa-instagram"></a>
                        <a href="#" className="social-login__icon fab fa-facebook"></a>
                        <a href="#" className="social-login__icon fab fa-twitter"></a>
                     </div>
                  </div>
               </div>
               <div className="screen__background">
                  <span className="screen__background__shape screen__background__shape4"></span>
                  <span className="screen__background__shape screen__background__shape3"></span>
                  <span className="screen__background__shape screen__background__shape2"></span>
                  <span className="screen__background__shape screen__background__shape1"></span>
               </div>

            </div>


         </div>











      </header>
   )
}
const HeaderStyle = {
   width: "100%",
   height: "100vh",
   // background: `url(${BackgroundImage})`,
   backgroundPosition: "center",
   backgroundRepeat: "no-repeat",
   backgroundSize: "cover",
   backgroundColor: "white"
}
export default SignInBox