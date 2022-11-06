import { 
  Button, 
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Link, OutlinedInput,
  Typography,
} from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const SignUp = ({ setIsSignIn, onSubmitSignUp }) => {
  const { register, handleSubmit, formState: { errors }, getValues, reset } = useForm();

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }} 
      animate={{ opacity: 1, scale: 1}}
    >
      <div className='login-label' >
        Register
      </div>

      <form onSubmit={handleSubmit(onSubmitSignUp)}>
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

        <div className='input-field'>
          <div className='input-label'>
            Confirm Password<span className='highlight'>*</span>
          </div>

          <OutlinedInput 
            {...register(
              'confirmPassword',
              { 
                required: { value: true, message: 'Confirm Password is required'},
                validate: (val => {
                  const { password } = getValues();
                  return password === val || 'Password does not match';
                })
              }
            )}
            error={errors?.confirmPassword ? true : false}
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
          {
            errors?.confirmPassword 
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
              {errors?.confirmPassword?.message}
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
                  fontWeight: 500,
                  fontSize: 13.5
                }}
              >
              I accept the terms of agreement
              </Typography>
            }
            control={<Checkbox {...register(
              'agreedToTerms',
              { required: { value: true, message: 'Please accept the terms of agreement'}}
            )} sx={{  paddingLeft: 0}} />} 
          />
        </div>
        {
          errors?.agreedToTerms 
            && 
          <FormHelperText 
            style={{
              marginBottom: -5,
              marginTop: -5, 
              marginLeft: 10, 
              fontSize: 13,
              fontWeight: 500,
              fontFamily: '\'Montserrat\', sans-serif'
            }}
            error
          >
            {errors?.agreedToTerms?.message}
          </FormHelperText>
        }

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
  setIsSignIn: PropTypes.func.isRequired,
  onSubmitSignUp: PropTypes.func.isRequired
};


export default SignUp;