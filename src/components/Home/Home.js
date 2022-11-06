import React from 'react';
import HomeWrapper from '../Home/HomeWrapper';
import Sidebar from '../Common/Sidebar/Sidebar';
import PropTypes from 'prop-types';
import HomeComponent from './HomeComponent';

const Home = ({ setUser }) => {
  return(
    <HomeWrapper>
      <Sidebar />

      <HomeComponent setUser={setUser} />
    </HomeWrapper>
  );
};

Home.propTypes = {
  setUser: PropTypes.func.isRequired
};

export default Home; 