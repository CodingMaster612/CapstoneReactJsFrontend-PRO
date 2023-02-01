import React from 'react'
import Sidebar from './SideBar/Side'
import Image from './AdminImage/Image'
function CreatorBox() {
  return (
    <header style={HeaderStyle}>
    
    <div>
    <Sidebar/>
    
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

export default CreatorBox