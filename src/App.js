import Register from "./components/pages/registration.js";
import SignIn from "./components/pages/signIn.js";
import Home from "./components/pages/Home.js";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/" element={<Home/>} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
