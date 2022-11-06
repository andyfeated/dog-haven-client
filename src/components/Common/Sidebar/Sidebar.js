import { EmailRounded, HouseRounded, PetsRounded, VolunteerActivismRounded } from '@mui/icons-material';
import { Tab, Tabs } from '@mui/material';
import React from 'react';
import SidebarWrapper from './SidebarWrapper';

const Sidebar = () => {
  return (
    <SidebarWrapper 
      initial={{ x: -1000}}
      animate={{ x: 0}}
      transition={{ ease: 'easeIn', duration: 0.5}}
    >
      <div>
        <Tabs>
          <Tab 
            icon={<HouseRounded style={{color: '#fff', fontSize: 40 }} />} 
            className='tab home-tab' 
            label="Home"
            iconPosition='start'
          />
        </Tabs>
        <Tabs>
          <Tab className='tab normal-tab' icon={<PetsRounded />} />
          <Tab className='tab middle-tab normal-tab' icon={<EmailRounded />} />
          <Tab className='tab normal-tab' icon={<VolunteerActivismRounded />} />
        </Tabs>
      </div>
    </SidebarWrapper>
  );
};

export default Sidebar;