import { Button, Checkbox, FormControlLabel, Link, OutlinedInput, Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const SignIn = ({ setIsSignIn }) => {  
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }} 
      animate={{ opacity: 1, scale: 1}}
    >
      <div className='login-label' >
        Login
      </div>

      <div className='input-field'>
        <div className='input-label'>
          Email<span className='highlight'>*</span>
        </div>

        <OutlinedInput
          sx={{
            width: '100%', 
            height: '52px', 
            borderRadius: '18px',
            fontFamily: '\'Montserrat\', sans-serif'
          }} 
          placeholder="main@website.com"
          color='primary' 
          autoComplete='off'
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

      <div className='checkbox-section'>
        <FormControlLabel
          sx={{marginLeft: 0}}
          label={
            <Typography 
              sx={{
                fontFamily: '\'Montserrat\', sans-serif',
                fontWeight: 400,
                fontSize: 15
              }}
            >
              Remember me
            </Typography>
          }
          control={<Checkbox  sx={{  paddingLeft: 0}} />} 
        />

        <Typography 
          sx={{
            fontFamily: '\'Montserrat\', sans-serif',
            marginTop: '0.6em',
            fontWeight: 500,
            fontSize: 15,
          }}
          color='primary'
        >
          Forgot Password?
        </Typography>
      </div>

      <div className="login-button">
        <Button
          component={motion.div}
          whileTap={{ scale: 0.9 }}
          disableElevation
          sx={{
            width: '100%',
            color: '#FFF',
            padding: '12px 0px',
            borderRadius: '15px',
            textTransform: 'none',
            fontFamily: '\'Montserrat\', sans-serif'
          }}
          variant='contained'
        >
          Sign In
        </Button>
      </div>

      <div className='login-footer'>
          Not registered yet?
        <Link
          onClick={() => setIsSignIn(false)}
          sx={{
            textDecoration: 'none',
            cursor: 'pointer'
          }}
        >
          <span className='highlight'> Create an account</span>
        </Link>
      </div>
    </motion.div>
  );
};

SignIn.propTypes = {
  setIsSignIn: PropTypes.func.isRequired
};

export default SignIn;