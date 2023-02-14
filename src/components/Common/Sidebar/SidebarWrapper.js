import styled from 'styled-components';
import { motion } from 'framer-motion';

const SidebarWrapper = styled(motion.div)`
  background-color: #fff;
  height: 100%;
  width: 25%;

  .tab {
    color: #fff;
    text-transform: none;
    font-family: 'Montserrat', sans-serif;
  }

  .tabs-style {
    .Mui-selected {
      background-color: #f3a000;
      color: #000;
    }
  }

  .normal-tab {
    width: 33.3%;
    font-size: 17px;
    color: #000;
    font-size: 30px;
    border-bottom: #000 solid 1px;
  }
  
  .home-tab {
    width: 100%;
    font-size: 25px;
    letter-spacing: -1px;
    font-weight: 700;
    display: flex;
    justify-content: start;
    align-items: center;
    background-color: #f3a000;
    color: #fff;
  }
`;

export default SidebarWrapper;