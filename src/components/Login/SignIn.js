import {
  Button, 
  Checkbox,
  FormControlLabel, 
  Link,
  OutlinedInput,
  Typography,
  FormHelperText
} from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';


const SignIn = ({ setIsSignIn, onSubmitSignIn }) => {  
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }} 
      animate={{ opacity: 1, scale: 1}}
    >
      <div className='login-label' >
        Login
      </div>

      <form onSubmit={handleSubmit(onSubmitSignIn)}>
        <div className='input-field'>
          <div className='input-label'>
            Email<span className='highlight'>*</span>
          </div>

          <OutlinedInput
            {...register(
              'emailInput',
              { 
                required: { value: true, message: 'Email is required'},
                pattern: { value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/, message: 'Invalid Email'}
              }
            )}
            sx={{
              width: '100%', 
              height: '52px', 
              borderRadius: '18px',
              fontFamily: '\'Montserrat\', sans-serif'
            }} 
            error={errors?.emailInput ? true : false}
            placeholder="main@website.com"
            color='primary' 
          />
          {
            errors?.emailInput 
            && 
            <FormHelperText
              style={{
                marginBottom: -18,
                marginTop: 5, 
                marginLeft: 10, 
                fontSize: 13,
                fontWeight: 500,
                fontFamily: '\'Montserrat\', sans-serif'
              }}
              error
            >
              {errors?.emailInput?.message}
            </FormHelperText>
          }
        </div>

        <div className='input-field'>
          <div className='input-label'>
              Password<span className='highlight'>*</span>
          </div>

          <OutlinedInput 
            {...register(
              'password',
              { 
                required: { value: true, message: 'Password is required'},
                minLength: { value: 8, message: 'Password must have at least 8 characters'}
              }
            )}
            error={errors?.password ? true : false}
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
          {
            errors?.password 
            && 
            <FormHelperText 
              style={{
                marginBottom: -18,
                marginTop: 5, 
                marginLeft: 10, 
                fontSize: 13,
                fontWeight: 500,
                fontFamily: '\'Montserrat\', sans-serif'
              }}
              error
            >
              {errors?.password?.message}
            </FormHelperText>
          }
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
            control={<Checkbox {...register('rememberUser')} sx={{  paddingLeft: 0}} />} 
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
                fontFamily: '\'Montserrat\', sans-serif'
              }}
              variant='contained'
            >
              Sign In
            </Button>
          </motion.div>
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

      </form>
    </motion.div>
  );
};

SignIn.propTypes = {
  setIsSignIn: PropTypes.func.isRequired,
  onSubmitSignIn: PropTypes.func.isRequired,
};

export default SignIn;