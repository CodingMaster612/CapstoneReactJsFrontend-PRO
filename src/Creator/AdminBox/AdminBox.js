import '../AdminBox/AdminBox.css'
import React, { useState } from 'react'
import Button from "../../components/reusables/Button"

import axios from 'axios'

function AdminBox() {
    const [admin, setAdmin] = useState({})


    const onClicks = (event) => {
        const email = localStorage.getItem("Credentials")
        axios.delete(`http://localhost:8081/admin/deleteUserById/${email}`, admin)
            .then((response) => {
                setAdmin(response.data)

                alert("Admin Successfully deleted user")
            }).catch((e) => {
                console.log(e)
            })


    }




    return (
        <div>

            <div className="glossy-rectangle">
                <h1>Admin ToolBar</h1>
                <div>
                <Button className="button-admin" onClick={onClicks} text={"Delete User"} />

                </div>
            </div>


        </div>

    )
}

export default AdminBox