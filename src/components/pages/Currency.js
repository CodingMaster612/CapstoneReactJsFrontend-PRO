


import CurrencyInput from "../../components/pages/CurrencyInput.js";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFlagUsa , faYenSign, faEuroSign, faSterlingSign} from '@fortawesome/free-solid-svg-icons'

function Currency() {

  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('EUR');
  const [rates, setRates] = useState([]);

  // useEffect(() => {
  //   axios.get('https://api.apilayer.com/fixer/latest?base=USD&apikey=yGb0LW5AcvHAYRPD5MS5l0kA9HjBr8Uf')

  //     .then(response => {
  //       setRates(response.data.rates);
  //     })
  // }, []);

  useEffect(() => {
    if (!!rates) {
      function init() {
        handleAmount1Change(1);
      }
      init();
    }
  }, [rates]);



  function format(number) {
    return number.toFixed(4);
  }

  function handleAmount1Change(amount1) {
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
    setAmount1(amount1);
  }

  function handleCurrency1Change(currency1) {
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
    setCurrency1(currency1);
  }

  function handleAmount2Change(amount2) {
    setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
    setAmount2(amount2);
  }

  function handleCurrency2Change(currency2) {
    setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
    setCurrency2(currency2);
  }


  return (
    <header style={HeaderStyle}>
      <div>
        <div className="h1-tag">
          <h1>Currency Converter</h1>
          <div className="h2-tag">
            {/* <h2>Popular Currencies</h2> */}
          </div>
          <div className="USD">
            {/* <h3>United States Dollar: - USD</h3> */}
          </div>
          <div className="YEN">
            {/* <h4>Japanese Yen:- Yen</h4> */}
          </div>
          <div className="EURO">
            {/* <h5>The EURO: -EURO</h5> */}
          </div>
        </div>
        <div className="navbar-wrapper">
          <ul>
            <Link to= "/">
            <li><a>Home</a></li>
            </Link>
            
            <li class="dropdown">
              <a className="dropbtn">Top Currency</a>
              <div className="dropdown-content">
                
              <a><FontAwesomeIcon className="" icon={faFlagUsa} />United States Dollar: USD</a>
              <a><FontAwesomeIcon className="" icon={faYenSign} />Japan YEN: JPY</a>
              <a><FontAwesomeIcon className="" icon={faEuroSign} />EU Countries: EUR</a>
              <a><FontAwesomeIcon className="" icon={faSterlingSign} />British Pound Sterling: GBP</a>
             
              </div>
            </li>
          </ul>
        </div>

        <CurrencyInput
          onAmountChange={handleAmount1Change}
          onCurrencyChange={handleCurrency1Change}
          currencies={Object.keys(rates)}
          amount={amount1}
          currency={currency1} />
        <CurrencyInput
          onAmountChange={handleAmount2Change}
          onCurrencyChange={handleCurrency2Change}
          currencies={Object.keys(rates)}
          amount={amount2}
          currency={currency2} />
      </div>
    </header>
  );
}
const HeaderStyle = {
  width: "100%",
  height: "100vh",
  backgroundColor: "white",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",

}
export default Currency;