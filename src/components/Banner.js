import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './Banner.css'
import Search from './Search';

const Banner = () => {
    const [showSearch, setShowSearch] = useState(false);
  return (
    <div className='banner'>
      <div className='banner_search'>
        {showSearch && <Search />}
        <Button onClick={() => setShowSearch(!showSearch)} className='banner_searchButton' variant='outlined'>{showSearch ? "Hide": "Search Dates"}</Button>
      </div>
<div className='banner_info'>
    <h1>Get out and stretch your imagination</h1>
    <h5> Plan a different kind of getaway to uncover the hidden gems near you!</h5>
    <Link to='/search' className='banner_link'>
    <Button variant='outlined'>Explore Nearby</Button>
    </Link>
</div>
    </div>
  )
}

export default Banner
