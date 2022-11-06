import React from 'react';
import Navbar from '../Common/Navbar/Navbar';
import PropTypes from 'prop-types';
import { HomeComponentWrapper } from './HomeWrapper';

const HomeComponent = ({ setUser }) => {
  return (
    <HomeComponentWrapper>
      <Navbar setUser={setUser} />
      
      <div>
      </div>
    </HomeComponentWrapper>
  );
};

HomeComponent.propTypes = {
  setUser: PropTypes.func.isRequired
};

export default HomeComponent;