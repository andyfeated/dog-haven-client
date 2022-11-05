import axios from 'axios';

/* eslint-disable no-undef */
const baseUrl = process.env.NODE_ENV === 'development' 
  ? process.env.REACT_APP_LOCAL_SERVER_BASE_URL 
  : process.env.REACT_APP_PROD_SERVER_BASE_URL;

const apiUrl = `${baseUrl}/api/login`;

const signIn = (signInDetails) => {
  const request = axios.post(apiUrl, signInDetails);
  return request;
};

export default { signIn };