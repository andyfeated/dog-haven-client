import { ArrowDropDownCircleRounded, ArrowDropDownOutlined, LogoutOutlined } from '@mui/icons-material';
import { Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import NavbarWrapper from './NavbarWrapper';
import PropTypes from 'prop-types';

const Navbar = ({ setUser }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('dogHavenUser');
  };

  return(
    <NavbarWrapper
      initial={{x: 500,  opacity: 0.8}}
      animate={{x: 0, opacity: 1}}
      transition={{ ease: 'easeIn', duration: 0.8 }}
    >
      <div className='user-card'>
        <Avatar sx={{ bgcolor: '#f3a000' }}>U</Avatar>

        <div className='user-name'>
          User Name
        </div>

        <IconButton
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <ArrowDropDownOutlined sx={{ color: '#f3a000', fontSize: 30 }} />
        </IconButton>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem 
            style={{ fontFamily: '\'Montserrat\', sans-serif', fontWeight: 500 }} 
            onClick={handleLogout}
          >
            Logout
            <LogoutOutlined style={{ marginLeft: 10, color: '#f3a000'}} />
          </MenuItem>
        </Menu>
      </div>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  setUser: PropTypes.func.isRequired
};

export default Navbar;