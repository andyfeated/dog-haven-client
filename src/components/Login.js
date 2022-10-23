/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import LoginWrapper from './LoginWrapper';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  
  const signInOrSignUp = () => {
    if(isSignIn){
      return <SignIn setIsSignIn={setIsSignIn} />;
    }
    
    return <SignUp  setIsSignIn={setIsSignIn}/>;
  };
  
  return (
    <LoginWrapper>
      <div className='login-section'>
        <div className='login-card'>
          {signInOrSignUp()}
        </div>
      </div>

      <img className='logo' width={260} height={120} src='/dog_haven_logo.png' />
    </LoginWrapper>
  );
};

export default Login;