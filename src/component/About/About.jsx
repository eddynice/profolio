import "./about.css";
import com from "../../asset/osas.jpg"
import styled from 'styled-components';


const About =()=>{
    const ListItem= ["React","Javascript", "PHP", "Express","Html","Material-UI","Css"];
    const LlistItem= ["Node","MongoDB", "Mysqli", "Redux/Redux-saga","Next.JS","Bootstap"];
    
    const List = ListItem.map((num)=>
    <li key={num} className="li">{num}</li>)

    const Lists = LlistItem.map((num)=>
    <li key={num} className="li">{num}</li>)

   

    return(
        <About1 id="about">
            <Container>
            <div className="aboutItem">
            <h2>More about me</h2>
                <p>I'm a Fullstack Software Engineer and a technology enthusiast who is passionate about problem solving and adapts well to change.
						I'm a diverse individual who loves to integrate and contribute meaningfully to the progress of any team I'm opportune to work with.
						My objectives are to create meaningful and useful products, and be a valuable member of my stakeholders. <br/>
						I enjoy mentoring, writing, gaming, and meeting new people.</p><br/>
                <p>I build new projects just to tickle my brain and love teaching others how they're made.</p><hr/>
                 <h2>Top Expert</h2>

                 <p>Fullstack developer with primary focus on Django + React: Download Resume</p>
                 <ListContainer>
                   
                <ContainerItem>
                     <div>{List}</div>
                    <div >{Lists}</div>
                    </ContainerItem>       
                </ListContainer>

            </div>

            <div className="aboutItem">
                <div className="more">
            <div className="pic" >
            <img alt="osasd" src={com}/>
                </div>
                <h1 style={{padding:"15px", fontSize:"30px"}}>Find me on Twitter & Youtube</h1>
                
                <NavLin href="/https://www.instagram.com/obayomimartins_/?hl=en">YouTube: @DennisIvy
</NavLin>
                <NavLin href="https://www.instagram.com/obayomimartins_/?hl=en">facebook</NavLin>
                
                </div>

                </div>
                </Container>
           
        </About1>

    )
}
export default About

const About1 = styled.div`
background-color: ${props => props.theme.secondaryColor};
        
 border-top: 2px solid ${props => props.theme.borderColor};

`
const Container = styled.div`
    background-color: ${props => props.theme.secondaryColor};
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width:1200px;
    @media (max-width: 904px) {
    flex-direction:column;
    width: 100%;
    }
   
    
`
const ListContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
   
    .containerItem {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        line-height: 0.5;
        width: 100%;
        height: 130px;
  
        background-color:  ${props => props.theme.previewShadow};
    }
    
@media (max-width: 800px) {
    flex-direction:column
}
`;
const ContainerItem  = styled.div`
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        line-height: 0.5;
        width: 100%;
        height: 130px;
        background-color:  ${props => props.theme.previewShadow};
        @media (max-width: 800px) {
            
    

        }

`;

const NavLin = styled.a`
  padding: 5px;
  color:  ${props => props.theme.linkColor};
  font-size:15px;
  text-decoration: none;
  &:hover {
    color:  ${props => props.theme.linkColor};
    cursor:pointer;
  }
`;