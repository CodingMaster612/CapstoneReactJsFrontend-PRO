import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import '../../css/SearchBar.css';
import Dropdown from '../../components/reusables/SideDropDown'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem('Credentials');
    if (email === (`${email}`)) {
      setIsSignedIn(true);
    }
  }, []);
  
  

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/${searchTerm}`)
  };

  return (
<div>
{isSignedIn ? (

    <div className="box-1">
      <form className="search-form" onSubmit={handleSubmit}>


        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Type in a Key word..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
        
        
      
      </form>
      
      {/* <Dropdown/> */}

    </div>
):(
  <h1>Please Sign In To Access Search Bar.</h1>
)}
</div>
  );
};

export default SearchBar;