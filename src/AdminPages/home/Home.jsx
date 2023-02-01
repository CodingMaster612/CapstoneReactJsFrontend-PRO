import Chart from "../../AdminComponents/chart/Chart";
import FeaturedInfo from "../../AdminComponents/featuredInfo/FeaturedInfo";
import "./home.css";
import "./CssHome.css"
import { userData } from "../../AdminComponents/dummyData";
import WidgetSm from "../../AdminComponents/widgetSm/WidgetSm";
import WidgetLg from "../../AdminComponents/widgetLg/WidgetLg";
import Sidebar from "../../AdminComponents/sidebar/Sidebar"
import Topbar from "../../AdminComponents/topbar/Topbar"

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
      
        <Sidebar/>
        {/* <Topbar/> */}
      
    </div>
  );
}
