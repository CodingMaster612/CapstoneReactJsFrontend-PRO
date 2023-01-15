import Register from "./components/pages/registration.js";
import SignIn from "./components/pages/signIn.js";
import Home from "./components/pages/Home.js";
import Currency from "./components/pages/Currency.js";
import HomeCrypto from "./components/pages/HomeCurrency";

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/currency" element={<Currency/>}/>
          <Route path="/crypto" element={<HomeCrypto/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
