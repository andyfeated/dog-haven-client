import { Alert, Snackbar } from '@mui/material';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import LoginWrapper from './LoginWrapper';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [signUpResult, setSignUpResult] = useState({ status: '', message: ''});
  
  const signInOrSignUp = () => {
    if(isSignIn){
      return <SignIn setIsSignIn={setIsSignIn} />;
    }
    
    return <SignUp setSignUpResult={setSignUpResult} setIsSignIn={setIsSignIn}/>;
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSignUpResult({ status: '', message: ''});
  };

  const snackBarContent = () => {
    if(signUpResult.status === 'success'){
      return (
        <Alert onClose={handleClose} color='primary' severity="success" sx={{ width: '100%' }}>
          {signUpResult?.message}
        </Alert>
      );
    }

    return (
      <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        {signUpResult?.message}
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
        open={signUpResult?.status} 
        autoHideDuration={5000}
      >
        {snackBarContent()}
      </Snackbar>
    </LoginWrapper>
  );
};

export default Login;