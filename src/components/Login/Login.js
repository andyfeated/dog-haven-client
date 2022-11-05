import { Alert, Snackbar } from '@mui/material';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import LoginWrapper from './LoginWrapper';
import SignIn from '../Login/SignIn';
import SignUp from '../Login/SignUp';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [authResult, setAuthResult] = useState({ status: '', message: ''});
  
  const signInOrSignUp = () => {
    if(isSignIn){
      return <SignIn setAuthResult={setAuthResult} setIsSignIn={setIsSignIn}  />;
    }
    
    return <SignUp setAuthResult={setAuthResult} setIsSignIn={setIsSignIn}/>;
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAuthResult({ status: '', message: ''});
  };

  const snackBarContent = () => {
    if(authResult.status === 'success'){
      return (
        <Alert onClose={handleClose} color='primary' severity="success" sx={{ width: '100%' }}>
          {authResult?.message}
        </Alert>
      );
    }

    return (
      <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        {authResult?.message}
      </Alert>
    );
  };
  
  return (
    <LoginWrapper>
      <div className='login-section'>
        <div className='login-card'>
          {signInOrSignUp()}
        </div>
      </div>


      <motion.div 
        initial={{ y: -220, scale: 0.5}}
        animate={{y: 30, scale: 1}}
        transition={{type: 'spring'}}
      >
        <img className='logo' width={260} height={120} src='/dog_haven_logo.png' />
      </motion.div>

      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        onClose={handleClose}
        open={authResult?.status ? true : false} 
        autoHideDuration={5000}
      >
        {snackBarContent()}
      </Snackbar>
    </LoginWrapper>
  );
};

export default Login;