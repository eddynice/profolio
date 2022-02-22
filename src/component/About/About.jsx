
import "./about.css";
import com from "../../asset/osas.jpg"
import styled from 'styled-components';
import {Link} from "react-router-dom";


const About =()=>{
    const ListItem= ["React","Javascript", "PHP", "Express","Html","Material-UI","Css"];
    const LlistItem= ["Node","MongoDB", "Mysqli", "Redux/Redux-saga","Next.JS","Bootstap"];
    
    const List = ListItem.map((num)=>
    <li key={num} className="li">{num}</li>)

    const Lists = LlistItem.map((num)=>
    <li key={num} className="li">{num}</li>)

   

    return(
        <About1 id="about">
            <div className="aboutItem">
            <h2>More about me</h2>
                <p>I'm a Fullstack Software Engineer and a technology enthusiast who is passionate about problem solving and adapts well to change.
						I'm a diverse individual who loves to integrate and contribute meaningfully to the progress of any team I'm opportune to work with.
						My objectives are to create meaningful and useful products, and be a valuable member of my stakeholders. <br/>
						I enjoy algorithms, mentoring, writing, gaming, and meeting new people.</p><br/>
                <p>I build new projects just to tickle my brain and love teaching others how they're made.</p><hr/>
                 <h2>Top Expert</h2>

                 <p>Fullstack developer with primary focus on Django + React: Download Resume</p>
                 <ListContainer>
                 <div className="ul">{List}</div>
                        <div className="ul">{Lists}</div>       
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