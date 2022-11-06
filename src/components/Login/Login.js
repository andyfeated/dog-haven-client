import { Alert, Snackbar } from '@mui/material';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import LoginWrapper from './LoginWrapper';
import SignIn from '../Login/SignIn';
import SignUp from '../Login/SignUp';
import loginServices from '../../services/login';
import userServices from '../../services/users';
import PropTypes from 'prop-types';
import { Navigate, useNavigate } from 'react-router-dom';

const Login = ({ user, setUser }) => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [authResult, setAuthResult] = useState({ status: '', message: ''});

  const handleSignInSubmit = async (signInData) => {
    const { emailInput, password, rememberUser } = signInData;
    
    const input = {
      email: emailInput,
      password,
      rememberUser
    };

    try{
      const user = await loginServices.signIn(input);

      if(user.data){
        setUser(user.data);
        localStorage.setItem('dogHavenUser', JSON.stringify(user.data));
      }
    }catch(error){
      console.log(error);
      setAuthResult({ status: 'error', message: error.response.data.error});
    }
  };

  const handleSignUpSubmit = async (signUpData) => {
    const { emailInput, password } = signUpData;
    
    const input = {
      email: emailInput,
      password,
    };

    try{
      await userServices.signUp(input);
      setAuthResult({ status: 'success', message: 'Account has been registered, please log in'});
      setIsSignIn(true);
    } catch(error){
      setAuthResult({ status: 'error', message: error.response.data.error});
    }
  };
  
  const signInOrSignUp = () => {
    if(isSignIn){
      return (
        <SignIn setIsSignIn={setIsSignIn} onSubmitSignIn={handleSignInSubmit} />
      );
    }
    
    return <SignUp setIsSignIn={setIsSignIn} onSubmitSignUp={handleSignUpSubmit}/>;
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

      {user && (
        <Navigate to="/home" replace={true} />
      )}
      
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

Login.defaultProps = {
  user: null
};

Login.propTypes = {
  user: PropTypes.object,
  setUser: PropTypes.func.isRequired
};

export default Login;