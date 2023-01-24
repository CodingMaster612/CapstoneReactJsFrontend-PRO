import React from 'react'
import PostDataMain from '../reusables/PostData'
export default function PostData() {
    return (
        <div>
            <header style={HeaderStyle}>
                <PostDataMain/>
            </header>
        </div>
        
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