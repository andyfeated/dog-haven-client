import { Button, Checkbox, FormControlLabel, Link, OutlinedInput, TextField, Typography, } from '@mui/material';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const SignUp = ({ setIsSignIn }) => {
  const [loginDetails, setLoginDetails] = useState({ email: '', password: ''});

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('works');
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }} 
      animate={{ opacity: 1, scale: 1}}
    >
      <div className='login-label' >
        Register
      </div>

      <form onSubmit={handleLoginSubmit}>
        <div className='input-field'>
          <div className='input-label'>
            Email<span className='highlight'>*</span>
          </div>

          <OutlinedInput
            sx={{
              width: '100%', 
              height: '52px', 
              borderRadius: '25px',
              fontFamily: '\'Montserrat\', sans-serif'
            }}
            autoComplete="new-password"
            placeholder="main@website.com"
            color='primary'
          />
        </div>

        <div className='input-field'>
          <div className='input-label'>
          Password<span className='highlight'>*</span>
          </div>

          <OutlinedInput
            type='password'
            sx={{
              width: '100%', 
              height: '52px', 
              borderRadius: '18px',
              fontFamily: '\'Montserrat\', sans-serif'
            }} 
            autoComplete="new-password"
            placeholder="Min. of 8 characters"
            color='primary' 
          />
        </div>

        <div className='input-field'>
          <div className='input-label'>
          Confirm Password<span className='highlight'>*</span>
          </div>

          <OutlinedInput 
            type='password'
            sx={{
              width: '100%', 
              height: '52px', 
              borderRadius: '18px',
              fontFamily: '\'Montserrat\', sans-serif'
            }} 
            placeholder="Enter confirmed password"
            color='primary' 
          />
        </div>

        <div className='checkbox-section'>
          <FormControlLabel
            sx={{marginLeft: 0}}
            label={
              <Typography
                sx={{
                  fontFamily: '\'Montserrat\', sans-serif',
                  fontWeight: 500,
                  fontSize: 13.5
                }}
              >
              I accept the terms of agreement
              </Typography>
            }
            control={<Checkbox  sx={{  paddingLeft: 0}} />} 
          />
        </div>

        <div className="login-button">
          <motion.div whileTap={{ scale: 0.9 }}>
            <Button
              type='submit'
              disableElevation
              sx={{
                width: '100%',
                color: '#FFF',
                padding: '12px 0px',
                borderRadius: '15px',
                textTransform: 'none',
                fontFamily: '\'Montserrat\', sans-serif',
              }} 
              variant='contained'
            >
          Sign Up
            </Button>
          </motion.div>
        </div>

        <div className='login-footer'>
          Already have an account?
          <Link
            onClick={() => setIsSignIn(true)}
            sx={{
              textDecoration: 'none',
              cursor: 'pointer'
            }}
          >
            <span className='highlight'> Log in</span>
          </Link>
        </div>
      </form>
    </motion.div>
  );
};

SignUp.propTypes = {
  setIsSignIn: PropTypes.func.isRequired
};


export default SignUp;