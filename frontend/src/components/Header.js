import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import { useLocation } from 'react-router-dom'
const Header = () => {
    const location = useLocation();
  return (
      <header>
          <div className="links" style={{ display: "flex", justifyContent: "flex-start", marginBottom: "4px" }}>
              <Link to="/">All Blogs</Link>
              <Link to="/my">My Blogs</Link>
              <Link to="/create">Create a Blog</Link>
          </div>
          <div style={{display:"flex" ,marginRight:"5px" , gap:"20px"}}>
            {(location.pathname !== "/create" && location.pathname !== "/login" && location.pathname !== "/signup" )? <SearchBar /> : null}
            
          </div>

      </header>
  )
}

export default Header