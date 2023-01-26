

import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Register from "./components/pages/registration.js";
import SignIn from "./components/pages/signIn.js";
import Profile from "./components/pages/Profile.js";
import Currency from "./components/pages/Currency.js";
import HomeCrypto from "./components/pages/HomeCurrency";
import Wallet from "./components/pages/Wallet.js";
import Cart from "./components/pages/cart.js";
import Shell from './components/pages/ShellCityBank.js';
import Bank from "./components/pages/BankHomePage.js";
import Buy from "./components/pages/Buy.js";
import Post from './components/pages/PostData.js';
import CoinDetailPage from "./components/pages/CoinDetailPage"
import CoinSummaryPage from "./components/pages/CoinSummaryPage";
import { WatchListContextProvider } from "./context/watchListContext";

import './App.css';

import { theme as customTheme } from './theme';
import ColorModeContext from './components/ColorModeContext';
import Layout from './layout/Layout';
import Dashboard from './pages/Dashboard';
const App = () => {
  const [mode, setMode] = useState('dark');
  const colorMode = useMemo(
    () => ({
      // The theme mode switch will invoke this method
      toggleColorMode: () => {
        window.localStorage.setItem('themeMode', mode === 'dark' ? 'light' : 'dark');
        setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
      },
    }),
    [mode],
  );

  useEffect(() => {
    try {
      const localTheme = window.localStorage.getItem('themeMode');
      localTheme ? setMode(localTheme) : setMode('dark');
    } catch {
      setMode('dark');
    }
  }, []);
const [user, setUser]= useState(null)
  useEffect(() => {
    const Id = localStorage.getItem("Credentials")
    axios.get(`http://localhost:8081/user/getItemsInCart/${Id}`)
        .then((response) => {
            
                setUser(response.data)
                if(Id !== null){
                  console.log("Function Successfully rendered")
                }else{
                  alert("Function in app.js is null, please add a Value")
                }
            
        })
        .catch((e) => {
            console.log(e)
        })
}, [])
  
  return (
    <HelmetProvider>
      <Helmet
        titleTemplate="%s | Timothy Currency Converter"
        defaultTitle="Tim's Currency Converter"

      />

      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={customTheme[mode]}>
          <CssBaseline />
          <WatchListContextProvider>
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route exact path='/' element={<Dashboard />} />
                <Route path="/register" element={<Register />} />
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/currency" element={<Currency />} />           <Route path="/crypto" element={<HomeCrypto />} />
                <Route path="/wallet" element={<Wallet />} />
                <Route path='/cart' element={<Cart />} />
                {/* <Route path="/bankLogin" element={<Shell />} /> */}
                {/* <Route path='/Bank' element={<Bank />} /> */}
                {/* <Route path="/buy" element={<Buy />} /> */}
                {/* <Route path="/postData" element={<Post/>} /> */}
                <Route path="/coin" element={<CoinSummaryPage/>} />
                <Route path="/coins/:id" element={<CoinDetailPage/>} />
              </Routes>
            </Layout>
          </BrowserRouter>
          </WatchListContextProvider>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </HelmetProvider>
  );
};

export default App;