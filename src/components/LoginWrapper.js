import styled from 'styled-components';
import { motion } from 'framer-motion';

const LoginWrapper = styled(motion.div)`
  display: flex;
  flex-direction: row;
  height: 930px;
  box-sizing: border-box;
  background: url('/welcome_bg.jpeg');
  background-size: cover;
  overflow-y: hidden;
  background-repeat: no-repeat;
  font-family: 'Montserrat', sans-serif;

  .highlight{
    color: #FFAE12; 
  }
  
  .login-section {
    width: 30%;
    min-width: 500px;
    height: 100%;
    background: #FFF;
    display: flex;
    justify-content: center;

    .login-card{
      width: 80%;
      height: 60%;
      margin-top: 11em;

      .login-label{
        font-weight: 800;
        font-size: 40px;
        margin-bottom: 50px;
      }

      .input-field{
        margin-top: 25px;
        
        .input-label{
          font-weight: 500;
          font-size: 19px;
          margin-bottom: 15px;
        }
      }

      .checkbox-section{
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
      }

      .login-button{
        margin-top: 20px;
      }

      .login-footer{
        margin-top: 32px;
        font-size: 14px;
        font-weight: 500;

        .highlight{
          color: #FFAE12; 
        }
      }
    }
  }

  .logo {
    margin: 40px 0 0 40px;
  }
`;

export default LoginWrapper;