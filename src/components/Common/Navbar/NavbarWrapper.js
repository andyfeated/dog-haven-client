import styled from 'styled-components';

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: end;
  height: 7.7%;
  font-family: 'Montserrat', sans-serif;

  .user-card {
    display: flex;
    flex-direction: row;
    background-color: #fff;
    width: 13.1%;
    border-radius: 25px;
    margin-right: 5px;
    margin-top: 5px;
    padding: 10px;
    height: 40px;
  }

  .user-name {
    margin-left: 10px;
    margin-top: 8px;
    letter-spacing: -0.3px;
    font-size: 18px;
    font-weight: 500;
  }
`;

export default NavbarWrapper;