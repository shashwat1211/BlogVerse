import React, { useState } from 'react';
import 'reactjs-popup/dist/index.css';

import { useBlogContext } from '../hooks/useBlogContext'; 

const SearchBar = () => {
    const [search, setSearch] = useState('');
    const { dispatch} = useBlogContext()
    const handleSearch =  (e) => {
        e.preventDefault()
        dispatch({type:"SEARCH_BLOG" , payload:search})
        setSearch("");
    }
    const BarStyle = {position:"relative", width: "16vw", background: "#F0F0F0", border: "none", padding: "0.5rem" };
    return (
        <div className='searchbar' style={{display:"flex" ,flexDirection:"row" , flexShrink:"2"}}>
            <input
                style={BarStyle}
                key="search-bar"
                value={search}
                placeholder={"search news"}
                onChange={(e)=>{setSearch(e.target.value)}}
            />
            <button onClick={handleSearch} className="searchbtn">Search</button>
        </div>
    );
};

export default SearchBar;