import { Button, Checkbox, FormControlLabel, Link, OutlinedInput, Typography, } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

const SignUp = ({ setIsSignIn }) => {
  return (
    <div>
      <div className='login-label' >
        Register
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
        <Button
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
    </div>
  );
};

SignUp.propTypes = {
  setIsSignIn: PropTypes.func.isRequired
};


export default SignUp;