import '/Users/timliner/Desktop/Capstone-PRO/capstone/src/AdminCom/AdminApp.css'
import MainDash from '/Users/timliner/Desktop/Capstone-PRO/capstone/src/AdminCom/MainDash/MainDash.jsx'
import RightSide from '/Users/timliner/Desktop/Capstone-PRO/capstone/src/AdminCom/RigtSide/RightSide.jsx'
import Sidebar from '/Users/timliner/Desktop/Capstone-PRO/capstone/src/AdminCom/Sidebar.jsx'

function Admin() {
  return (
    <div className="App-1">
      <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
        <RightSide/>
      </div>
    </div>
  );
}

export default Admin;