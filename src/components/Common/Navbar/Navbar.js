import { ArrowDropDownCircleRounded, ArrowDropDownOutlined } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import React from 'react';
import NavbarWrapper from './NavbarWrapper';

const Navbar = () => {
  return(
    <NavbarWrapper>
      <div className='user-card'>
        <Avatar sx={{ bgcolor: '#f3a000' }}>U</Avatar>

        <div className='user-name'>
          User Name
        </div>

        <IconButton>
          <ArrowDropDownOutlined sx={{ color: '#f3a000', fontSize: 30 }} />
        </IconButton>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;