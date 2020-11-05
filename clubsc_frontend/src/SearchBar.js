import React from 'react';

const SearchBar = ({keyword,setKeyword}) => {
  const BarStyling = {height: "2rem", width:"38rem", background:"#f0f0f0", border:"none", padding:"0.5rem"};
  return (
    <input 
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"Search for a Club"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar