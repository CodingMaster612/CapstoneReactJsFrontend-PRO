import React, { useState, useEffect } from "react";
import axios from "axios";
import '../CurrencyConverter/CurrencyConverter.css'
import CoinGecko from '../../CryptoConverter/x.js'
import CoinGeckoCurrencyChart from '../CurrencyConverter/CurrencyDough.js'
import CurrencyDoughnutChart from './chartmoney.js'
const CurrencyConverter = () => {


  return (
    <>
    <CurrencyDoughnutChart/>
    <CoinGeckoCurrencyChart/>
      <CoinGecko/>
      </>
    
  );
};

export default CurrencyConverter;
