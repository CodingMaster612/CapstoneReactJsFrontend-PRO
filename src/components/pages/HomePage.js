import React, {useState} from 'react'
import SearchBar from '../../components/reusables/SearchBar'
import DropDownButton from '../../components/reusables/SideDropDown'
// import BackgroundImage from '../../img/white.png'
import pillow from '../../img/pillowLogo.png'
import ImageComponent from '../reusables/ImageComponent'
import TypeWriter from '../../components/reusables/TypeWriter.js'
import SideBar from '../reusables/SideBar.js'
import SignInButton from '../reusables/SignInButton'
import SignUpButton from '../reusables/SignUpButton'
import Modal from '../Questionables/Modal'
function HomePage(props) {
    
    
    
    
    
    return (
        <header style={HeaderStyle}>
            <div>
                <SearchBar />
                <ImageComponent
                    imageUrl={pillow}

                    imageClass={"image"}
                />

                {/* <TypeWriter/> */}
                
                <SignInButton/>
                <SignUpButton/>
                <div> 
                <SideBar/>
                </div>
                <Modal/>
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
export default HomePage