import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className='header'>
        <div className='headerLeft'>
            <img src='https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg' alt='fb-clone-react' />
            <div className='headerInput'>
                <SearchIcon />
                <input type='text' />
            </div>
        </div>
        <div className='headerMiddle'></div>
        <div className='headerRight'></div>
    </div>
  )
}

export default Header