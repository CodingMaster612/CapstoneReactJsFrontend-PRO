import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import '../../css/SearchBar.css';
import Dropdown from '../../components/reusables/SideDropDown'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  

  const navigate = useNavigate();


  
  

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/${searchTerm}`)
  };

  return (

    <div className="box-1">
      <form className="search-form" onSubmit={handleSubmit}>


        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Enter Desired Location..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
        
        
      
      </form>
      
      {/* <Dropdown/> */}

    </div>
  );
};

export default SearchBar;