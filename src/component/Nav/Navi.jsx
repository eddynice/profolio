import React from 'react'
import styled from 'styled-components';

const Wrapper=styled.div`
display: flex;
    justify-content: space-between;
    border-bottom: 2px solid ${props => props.theme.borderColor};
    border-radius: 5px 5px 0 0;
    align-items: center;
    background-color: ${props => props.theme.bgColor};
    -webkit-box-shadow: -1px 1px 3px 1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -1px 1px 3px 1px rgba(0, 0, 0, 0.75);
    box-shadow: -1px 1px 3px 1px rgba(0, 0, 0, 0.75);

`;
const Dots =styled.div`
  display: flex;
  padding: 10px;
`;

const Browser= styled.div`
background-color: yellow;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    margin: 5px;
    -webkit-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
    box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
`
const BrowserRed = styled(Browser)`
background-color: red;

`;
const BrowserBlue = styled(Browser)`
background-color:#FEC02F;

`;
const Nav =styled.div`
  color: white;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const NavLin = styled.a`
  margin-right: 5px;
  margin-left: 5px;
  padding: 20px;
  color:  ${props => props.theme.mainText};
  font-size:20px;
  text-decoration: none;
  &:hover {
    color:  ${props => props.theme.mainText};
    cursor:pointer;
  }
`;

export default  function Navi() {
  return (
    <Wrapper>
      <Dots>
        <Browser/>
        <BrowserRed/>
        <BrowserBlue/>
          </Dots>
          
          <Nav>
          <NavLin href="/#form">Contact</NavLin>
          
          <NavLin href="/#about">About</NavLin>
         
            </Nav>
                          

    </Wrapper>
  )
}
