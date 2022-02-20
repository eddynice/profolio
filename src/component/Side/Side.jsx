import React from 'react';
import "./side.css"
import pic from "../../asset/osas.jpg"
import { BsLightbulb } from 'react-icons/bs';
import {  useDispatch } from 'react-redux';
import {applyTheme} from "../../redux/actionTheme"
import{ darkTheme, lightTheme ,greenTheme,partyTheme} from '../../component/Theme';
import styled from 'styled-components';

const Size = styled.div`
display: flex;
justify-content: space-evenly;
//background-color: #fff;
-webkit-box-shadow: -1px 1px 3px 1px rgba(0, 0, 0, 0.75);
-moz-box-shadow: -1px 1px 3px 1px rgba(0, 0, 0, 0.75);
box-shadow: -1px 1px 3px 1px rgba(0, 0, 0, 0.75);
background-color: ${props => props.theme.secondaryColor};
@media (max-width: 800px) {
        display: flex;
        flex-direction: column;
    }
`

const Left = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 50px;
    padding-bottom: 50px;
    

`;


const Dots =styled.div`
height: 30px;
width: 30px;
background-color: #fff;
border-radius: 50%;
margin: 5px;
border: 2px solid ${props => props.theme.themeDotBorder};
-webkit-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
-moz-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
cursor: pointer;
&:hover{
    border-width: 5px;

}
`;

const Dot1 =styled(Dots)`

background-color: #192734;
border: 2px solid ${props => props.theme.themeDotBorder};
`;
const Dot2 =styled(Dots)`

background-color: #78866b;
border: 2px solid ${props => props.theme.themeDotBorder};
`;
const Dot3 =styled(Dots)`

background-color: #7E4C74;
border: 2px solid ${props => props.theme.themeDotBorder};
`;

export default function Side() {
   const dispatch = useDispatch();


   const changeTheme = (theme) => {
     console.log(theme)
     dispatch(applyTheme(theme));
     dispatch(applyTheme(theme));
   }
   
    return (
        <Size> 
            <Left>
                
                <div className="img">
            <img alt="osasd" src={pic}/>
               </div>
                <h3 className="h3" >Personalize Theme</h3>
                <div className="side-dot">
                    
                       <Dots onClick={()=>changeTheme(lightTheme)} />
                       <Dot1 onClick={() => changeTheme(darkTheme)}/>
                       <Dot2 onClick={() => changeTheme(greenTheme)}/>
                       <Dot3 onClick={() => changeTheme(partyTheme)}/>
                       <BsLightbulb/>
                
                </div>
                <p className="pa">Theme settings will be saved for <br/>  your next vist</p>


            </Left>
            
            <Right>
                <RightBackGroundShadow>
                    <Pre>
                        <D0/>
                        <D2/>
                        <h3>What I Do</h3>
							<p>I was a lead developer in a past life, now I enjoy teaching courses.</p>
                        <D3/>
                        <D4/>
                    
</Pre>
                </RightBackGroundShadow>
            </Right>
            
        </Size>
    )
}


const Right = styled.div`
display: flex;
align-items: center;
padding-top: 50px;
padding-bottom: 50px;
@media (max-width: 800px) {
    justify-content: center;

}



`;

const RightBackGroundShadow = styled.div`
background-color:${props => props.theme.previewShadow};
width: 300px;
height: 180px;
padding-left: 30px;
padding-top: 30px;

`;

const Pre = styled.div`
width: 300px;
height: 180px;
border: 1.5px solid #17a2b8;
padding: 15px;
position: relative;
background-color: ${props => props.theme.previewBg};
p
{ color: ${props => props.theme.mainText}
    font-family: "Roboto Mono", monospace;

}
h3 {
    padding: 10px;
    font-size: 2em;
}

`;

const D1 = styled.div`
width: 7px;
height: 7px;
border-radius: 50%;
border: 1.5px solid #17a2b8;
background-color: #fff;
position: absolute;


`;
const D0 = styled(D1)`
top: -5px;
left: -5px
`;

const D2  = styled(D1)`
top: -5px;
right: -5px;
`;
const D3  = styled(D1)`
bottom:-5px;
left: -5px;
`;
const D4  = styled(D1)`
bottom:-5px;
right: -5px;
`;
