//https://www.robinwieruch.de/react-styled-components
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Home } from '../homeIcon.svg';
import { ReactComponent as Genres } from '../genres.svg';

const Nav = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`;
const NavHeader = styled.div`
  max-width: 1010px;
  padding: 26px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;
const NavLeft = styled.div`
  width: 33.333%;
  display: flex;
  text-align: left;
`;
const NavCenter = styled.div`

  display: flex;
  text-align: center;
`;
const Input = styled.input`
  font-size: 16px;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  padding: 7px 33px;
  border-radius: 3px;
  color: #999;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  background: #fafafa;
  &:active,
  &:focus {
    text-align: left;
  }
`;
const NavRight = styled.div`
  width: 33.333%;
  text-align: right;
  svg {
    margin-right: 70px;
    max-width:20px;
  }
`;
const MenuLink = styled.a``;
function Navbar() {
  return (
    <Nav>
      <NavHeader>
        <NavLeft>Cool Film App</NavLeft>
        <NavCenter>
          <Input type="text" placeholder="Search?" />
        </NavCenter>
        <NavRight>
          <MenuLink href="#">
            <Home />   
          </MenuLink>
          <MenuLink href="#">
             <Genres />
          </MenuLink>
          {/* <MenuLink href="#">
            <Avatar />
          </MenuLink> */}
        </NavRight>
      </NavHeader>
    </Nav>
  );
}
export default Navbar;