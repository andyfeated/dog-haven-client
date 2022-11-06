import React from 'react';
import HomeWrapper from '../Home/HomeWrapper';
import Sidebar from '../Common/Sidebar/Sidebar';
import PropTypes from 'prop-types';
import HomeComponent from './HomeComponent';

const Home = () => {
  return(
    <HomeWrapper>
      <Sidebar />

      <HomeComponent />
    </HomeWrapper>
  );
};

Home.defaultProps = {
  user: null
};

Home.propTypes = {
  user: PropTypes.object
};

export default Home; 