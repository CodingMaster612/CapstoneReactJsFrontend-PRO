import React from 'react'
import Sidebar from './SideBar/Side'
import Image from './AdminImage/Image'
import BackgroundImage from '../img/white.png'
import Rectangle from './Rectangle/Rectangle'
function CreatorBox() {
  return (
    <header style={HeaderStyle}>
    
    <div>
    <Sidebar/>
    <Rectangle/>
    </div>
    </header>
  )
}
const HeaderStyle = {
  width: "100%",
  height: "100vh",
  background: `url(${BackgroundImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundColor: "white"
}

export default CreatorBox