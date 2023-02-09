import '../AdminBox/AdminBox.css'
import React, { useState, useEffect } from 'react'
import Button from "../../components/reusables/Button"
import AdminLogo from '../../img/userIcon.png'

import axios from 'axios'

function AdminBox() {
    const [admin, setAdmin] = useState({})
    const [currentUser, setCurrentUser] = useState(null);
    const [email, setEmail] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [user, setUser] = useState({})
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        const email = localStorage.getItem('Credentials');
        if (email === (`${email}`)) {
          setIsSignedIn(true);
        }
      }, []);

    const confirmAction = () => {
        const response = prompt("Are you sure you want to do that?");

        if (response == "yes") {
            alert("Ok was pressed");
            localStorage.removeItem('Credentials')
        } else {
            alert("Cancel was pressed");
        }
    }


    const onClicks = (event) => {
        const email = localStorage.getItem("Credentials")
        axios.delete(`http://localhost:8081/admin/deleteUserById/${email}`, admin)
            .then((response) => {
                setAdmin(response.data)

                confirmAction();
            }).catch((e) => {
                console.log(e)
            })


    }


    const changeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        const tempUser = { ...user }
        tempUser[name] = value
        setUser(tempUser)
     }
  
     const submitHandler = () => {
  
  
        axios.post(`http://localhost:8081/user/updateSignIn`, user)
           .then((response) => {
  
              console.log(response.data)
              localStorage.setItem("Credentials", response.data.email);
              localStorage.setItem("imageUrl", response.data.storedUrl);
              
                alert("This is a test")
           }).catch((e) => {
              console.log(e.response)
  
           })
  
     }
  
    const onClicking = () => {

        const email = localStorage.getItem('Credentials');
        setCurrentUser(email);
        alert(`The Current User That is logged in ${email}`)

    }

    // const handleEmailChange = (event) => {
    //     setNewEmail(event.target.value);
    // };
    

    // const handleSave = () => {
    //     localStorage.setItem('Credentials', newEmail);
        
    //     setEmail(newEmail);


    //     alert("Email Saved")
    // };
    const handlePrint = () => {
            window.print();
        };
    
        const handleLogout= () => {
            const email = localStorage.getItem('Credentials');

            localStorage.removeItem("Credentials")
            localStorage.removeItem("imageUrl")
            alert(`Successfully logged out user ${email}`)

        }

        return (
            
            <div>
                
                {isSignedIn ? (
                    <header style={HeaderStyle}>
                <div className="glossy-rectangle">
                    <h1> User Tool Bar </h1>
                    <div className='Admin-Button'>
                        <Button className="button-admin" onClick={onClicks} text={"Delete Your User"} />

                    </div>
                    <div className='currentUser'>
                        <Button className="button-admin" onClick={onClicking} text={" Get User"} />
                    </div>
                    <div className="Change-User">
                        <input type="text" onChange={changeHandler} name="email" value={user.email} placeholder="Email Address..."/>
                    </div>
                    <div className="Change-User">
                        <input type="password" onChange={changeHandler} name="password" value={user.password} placeholder="Password..."/>
                    </div>
                    <div className="Change">
                        <button onClick={submitHandler} >UPDATE USER</button>
                    </div>
                    {/* <div className="print">
                        <button onClick={handlePrint}>Print</button>
                    </div> */}
                    <div className="logout-button">
                        <button onClick={handleLogout}>LOGOUT</button>
                    </div>
                    <div>
                <img  className=" Admin-image "src={AdminLogo} />
            </div>

                </div>
                </header>

):(
    <h1>Please Sign In To Access Admin bar.</h1>
)}
            </div>

        )
    }

    const HeaderStyle = {
        width: "100%",
        height: "100vh",
        backgroundColor: "white",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // background: `url(${BackgroundImage})`,
      
        backgroundSize: "cover",
      
      }

    export default AdminBox