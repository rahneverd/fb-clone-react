import React from 'react'
// importing stylesheet for component
import './Header.css'
// importing icons from material-ui
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import {Avatar, IconButton} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

        <div className='headerMiddle'>
            <div className='headerOption'>
                <HomeIcon fontSize='large' />
            </div>
            <div className='headerOption'>
                <FlagIcon fontSize='large' />
            </div>
            <div className='headerOption'>
                <SubscriptionsOutlinedIcon fontSize='large' />
            </div>
            <div className='headerOption'>
                <StorefrontOutlinedIcon fontSize='large' />
            </div>
            <div className='headerOption'>
                <SupervisedUserCircleIcon fontSize='large' />
            </div>
        </div>

        <div className='headerRight'>
            <div className='headerInfo'>
                <Avatar/>
                <h4>OwaiswWala</h4>
            </div>
            <IconButton>
                <AddIcon />
            </IconButton>
            <IconButton>
                <ForumIcon />
            </IconButton>
            <IconButton>
                <NotificationsActiveIcon />
            </IconButton>
            <IconButton>
                <ExpandMoreIcon />
            </IconButton>
        </div>
    </div>
  )
}

export default Header