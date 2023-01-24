import axios from "axios";
import { useState } from "react";
import '../../css/signIn.css';

// import { useNavigate } from 'react-router'

function PostDataMain() {
   //  const navigator = useNavigate()
   const [user, setUser] = useState({})


   const changeHandler = (event) => {
      const name = event.target.name
      const value = event.target.value
      const tempUser = { ...user }
      tempUser[name] = value
      setUser(tempUser)
   }

   const submitHandler = () => {


      const Id = 1;
      //get id using get mapping 
      //backend call getById
      axios.post(`http://localhost:8081/user/getItemsInCart/${Id}`, user)
         .then((response) => {

            console.log(response.data)
            localStorage.setItem("Credentials", response.data.id)
            setUser(response.data)


            

         }).catch((e) => {
            console.log(e.response)

         })

   }
   return (
      <header style={HeaderStyle}>
        

            


         
        <button className="button login__submit" onClick={submitHandler} />



//add html and content here 






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
export default PostDataMain