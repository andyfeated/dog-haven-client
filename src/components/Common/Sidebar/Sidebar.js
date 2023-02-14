import { EmailRounded, HouseRounded, PetsRounded, RoomRounded, VolunteerActivismRounded } from '@mui/icons-material';
import { Divider, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import SidebarWrapper from './SidebarWrapper';

const Sidebar = () => {
  const [value, setValue] = useState(false);
  const [homeTabValue, setHomeTabValue] = useState('home');
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setHomeTabValue(false);
  };

  const handleChangeHomeTab = (event, newValue) => {
    setHomeTabValue('home');
    setValue(false);
  };
  
  return (
    <SidebarWrapper 
      initial={{ x: -1000}}
      animate={{ x: 0}}
      transition={{ ease: 'easeIn', duration: 0.5}}
    >
      <div>
        <Tabs className='tabs-style'
          value={homeTabValue}
          onChange={handleChangeHomeTab}
          TabIndicatorProps={{
            style: { background: '#000', height: '10%'}
          }}
        >
          <Tab
            icon={<HouseRounded style={{color: `${homeTabValue ? '#000' : '#fff'}`, fontSize: 40 }} />} 
            className='tab home-tab' 
            label="Home"
            value="home"
            iconPosition='start'
          />
        </Tabs>
        <div/>
        <Tabs
          value={value} 
          onChange={handleChange}
          TabIndicatorProps={{
            style: { height: '10%'}
          }}
        >
          <Tab value="to-adopt" className='tab normal-tab' icon={<PetsRounded />} />
          <Tab value="messages" className='tab normal-tab' icon={<EmailRounded />} />
          <Tab value="donate" className='tab normal-tab' icon={<VolunteerActivismRounded />} />
        </Tabs>
      </div>
    </SidebarWrapper>
  );
};

export default Sidebar;