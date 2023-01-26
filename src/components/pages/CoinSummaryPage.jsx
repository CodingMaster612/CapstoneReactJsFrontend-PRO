import React from "react";
import AddCoin from "../../components/AddCoin"
import CoinList from "../../components/CoinList"

const CoinSummaryPage = () => {
  return (
    <header style={HeaderStyle}>
    <div className="coinsummary shadow border p-2 rounded mt-2 bg-light">
      <AddCoin />
      <CoinList />
    </div>
    </header>
  );
};
const HeaderStyle = {
  width: "100%",
  height: "100vh",
  // background: `url(${BackgroundImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundColor: "white"
}
export default CoinSummaryPage;
