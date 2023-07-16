import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
const Write = () => {
  return (
    <div className='write'>
      <div className="write-cont">
        <SearchBar />
      </div>
      <div className='write-cont jk'>
        <h3>Add an article</h3>
      </div>
      <div>
      <Link to="/create"><AddCircleIcon color='primary' /></Link>
      </div>  
    </div>
  )
}

export default Write