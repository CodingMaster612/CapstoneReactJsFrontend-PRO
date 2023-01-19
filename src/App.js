// import Register from "./components/pages/registration.js";
// import SignIn from "./components/pages/signIn.js";
// import Home from "./components/pages/Home.js";
// import Currency from "./components/pages/Currency.js";
// import HomeCrypto from "./components/pages/HomeCurrency";
// import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/register" element={<Register />} />
//           <Route path="/" element={<SignIn />} />
//           <Route path="/Home" element={<Home/>} />
//           <Route path="/currency" element={<Currency/>}/>
//           <Route path="/crypto" element={<HomeCrypto/>} />

//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect, useMemo } from 'react';
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

  return (
    <HelmetProvider>
      <Helmet
        titleTemplate="%s | Timothy Currency Converter"
        defaultTitle="Tim's Currency Converter"
        
      />

      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={customTheme[mode]}>
          <CssBaseline />
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route exact path='/' element={<Dashboard />} />
                <Route path="/register" element={<Register />} />
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/currency" element={<Currency />} />           <Route path="/crypto" element={<HomeCrypto />} />
                <Route path="/wallet" element= {<Wallet/>} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </HelmetProvider>
  );
};

export default App;