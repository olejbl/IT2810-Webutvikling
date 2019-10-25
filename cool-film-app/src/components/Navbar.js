  //https://www.robinwieruch.de/react-styled-components
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Home } from '../homeIcon.svg';
import { ReactComponent as Genres } from '../genres.svg';
import SearchBar from "./SearchBar"

const Nav = styled.div`
  background-color: #c9c9c9;
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
          <SearchBar/>
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