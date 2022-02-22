import React from 'react'
import styled from 'styled-components';
const Footer = () => {
	return (
    <Footers>
      <FooterUl>
          <li className='footer-li'>
            <FooterLink href="https://github.com/obayomi96">
              GitHub
            </FooterLink>
          </li>
          <li>
            <FooterLink href="https://www.linkedin.com/in/martins-obayomi-998202162/">LinkedIn
            </FooterLink>
          </li>
          <li>
            <FooterLink href="https://stackoverflow.com/users/9985506/martins">StackOverflow
            </FooterLink>
          </li>
          <li>
            <FooterLink href="https://twitter.com/martinsobayomi"> Twitter
            </FooterLink>
          </li>
          <li>
            <FooterLink href="https://www.instagram.com/obayomimartins_/?hl=en">Instagram
            </FooterLink>
          </li>
        </FooterUl>
    </Footers>
	);
}

export default Footer;

const FooterUl  = styled.ul`
margin: auto;
  align-content: center;
  text-transform: uppercase;
  display: inline-flex;
  list-style-type: none;
  @media  (max-width: 600px) {
    flex-direction:rows;
    align-items:center;
    flex-wrap:wrap;
    justify-content:center;
  

`
  
const FooterLink = styled.a`
color:  ${props => props.theme.mainText};
font-weight: bold;
text-transform: uppercase;
text-decoration: none;
letter-spacing: 0.15em;
padding: 15px 20px;
text-align: center;
transition: 0.5s;
&:hover {
color:  ${props => props.theme.mainText};
@media  (max-width: 600px) {
  flex-direction:rows;
  align-items:center;
  flex-wrap:wrap;
 

}
`



const Footers  = styled.div`
display: flex;
height: 120px;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color:  ${props => props.theme.bgColor};
  margin-top:10px;
  border-top: 2px solid ${props => props.theme.borderColor};
  
  }
}
`;