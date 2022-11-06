import React from 'react';
import PropTypes from 'prop-types';

const Home = () => {
  return(
    <div>h1</div>
  );
};

Home.defaultProps = {
  user: null
};

Home.propTypes = {
  user: PropTypes.object
};

export default Home; 