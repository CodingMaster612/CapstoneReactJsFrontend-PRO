import '../AdminBox/AdminBox.css'
import React, { useState } from 'react'
import Button from "../../components/reusables/Button"

import axios from 'axios'

function AdminBox() {
    const [admin, setAdmin] = useState({})
    const [currentUser, setCurrentUser] = useState(null);
    const [email, setEmail] = useState('');
    const [newEmail, setNewEmail] = useState('');
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
    const onClicking = () => {

        const email = localStorage.getItem('Credentials');
        setCurrentUser(email);
        alert(`The Current User That is logged in ${email}`)

    }

    const handleEmailChange = (event) => {
        setNewEmail(event.target.value);
    };

    const handleSave = () => {
        localStorage.setItem('Credentials', newEmail);
        setEmail(newEmail);
    };


    return (
        <div>

            <div className="glossy-rectangle">
                <h1>Admin ToolBar</h1>
                <div className='Admin-Button'>
                    <Button className="button-admin" onClick={onClicks} text={"Delete User"} />

                </div>
                <div className='currentUser'>
                    <Button className="button-admin" onClick={onClicking} text={"User"} />
                </div>
                <div className="Change-User">
                    <input type="text" value={newEmail} onChange={handleEmailChange} />
                </div>
                <div className="Change">
                    <button onClick={handleSave}>Update User</button>
                </div>

            </div>


        </div>

    )
}

export default AdminBox