import "../../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BackgroundImage from '../../img/white.png'
import user from '../../img/user.png'
import { faReddit, faBitcoin, faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode, faWallet, faCoins, faUser, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
function Home() {
return (
<header style={HeaderStyle}>
   <body className="flex-col">
      <div className="flex-col column">
         <div className="flex-row icon-wrapper">
            <Link to="/">
            <FontAwesomeIcon className="icon-bitcoin" icon={faBitcoin} />
            </Link>
            <Link to="/">
            <FontAwesomeIcon className="icon-reddit" icon={faReddit} />
            </Link>
            <Link to="/">
            <FontAwesomeIcon className="icon-laptop" icon={faLaptopCode} />
            </Link>
            <Link to="/">
            <FontAwesomeIcon className="icon-instagram" icon={faSquareInstagram} />
            </Link>
         </div>
         <div className="flex-column icon-wrapper-column">
            <Link to="/wallet">
            <FontAwesomeIcon className="icon-wallet" icon={faWallet} />
            </Link>
            <Link to="/currency">
            <FontAwesomeIcon className="icon-coins" icon={faCoins} />
            </Link>
            
            <Link to="/profile">
            <FontAwesomeIcon className="icon-user" icon={faUser} />
            </Link>
         </div>
         <div className="flex-row user-icon-wrapper">
            <img className="user-icon-image" src={user} alt="user" />
         </div>
         <div className=" flex-column user-info-wrapper">
            <div className="user-info">
               <h1>View Wallet?</h1>
            </div>
            <div className="user-info">
               <h2>View converter?</h2>
            </div>
            <div className="user-info">
               <h3>View profile?</h3>
            </div>
            
         </div>
      </div>
      <div className="section">
         <div className="flex-row header"></div>
      </div>
      <div className="spacer">
      </div>
   </body>
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
}
export default Home;