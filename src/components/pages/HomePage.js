import React from 'react'
import SearchBar from '../../components/reusables/SearchBar'
import DropDownButton from '../../components/reusables/SideDropDown'
// import BackgroundImage from '../../img/white.png'


function HomePage() {
    return (
        <header style={HeaderStyle}>
            <div>
                <SearchBar />
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