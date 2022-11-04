import { motion } from 'framer-motion';
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

      <motion.div 
        initial={{ y: -220, scale: 0.5}}
        animate={{y: 30, scale: 1}}
        transition={{type: 'spring'}}
      >
        <img className='logo' width={260} height={120} src='/dog_haven_logo.png' />
      </motion.div>
    </LoginWrapper>
  );
};

export default Login;