import React,{useState} from "react";
import "./about.css";
import com from "../../asset/osas.jpg"
import {AboutId} from "../../files";
import styled from 'styled-components';
import {Link} from "react-router-dom";


console.log(AboutId[0].about)
const About =({para})=>{
    const ListItem= ["REACT","JAVASCRIPT", "PHP", "EXPRESS","HTML"];
    const List = ListItem.map((num)=>
    <li key={num} className="li">{num}</li>)
console.log(ListItem)

 //const [task1, settask] = useState(task)



    return(
        <About1>
            <div className="aboutItem">
            <h2>More about me</h2>
                <p>{para}to tickle my brain and love teaching others how they're made.</p><br/>
                <p>{para}I build new projects just to tickle my brain and love teaching others how they're made.</p><hr/>
                 <h2>Top Expert</h2>

                 <p>Fullstack developer with primary focus on Django + React: Download Resume</p>
                 <ListContainer>
                 <div className="ul">{List}</div>
                        <div className="ul">{List}</div>       
                </ListContainer>

            </div>

            <div className="aboutItem">
                <div className="more">
            <div className="pic" >
            <img alt="osasd" src={com}/>
                </div>
                <h1 style={{padding:"15px"}}>Find me on Twitter & Youtube</h1>
                <NavLin to="/about" target="_blank">YouTube: @DennisIvy
</NavLin>
                <NavLin to="/about" target="_blank">About</NavLin>
                </div>


            </div>
           
        </About1>

    )
}
export default About

const About1 = styled.div`

display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        margin: 0.1em;
        background-color: ${props => props.theme.secondaryColor};
        border-top: 2px solid ${props => props.theme.borderColor};
        @media  (max-width: 800px) {
                display: flex;
                flex-direction: column;
            }

`
const ListContainer = styled.div`
display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color:  ${props => props.theme.previewShadow};
@media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}
`;
const NavLin = styled(Link)`
  padding: 10px;
  color:  ${props => props.theme.linkColor};
  font-size:15px;
  text-decoration: none;
  &:hover {
    color:  ${props => props.theme.linkColor};
    cursor:pointer;
  }
`;