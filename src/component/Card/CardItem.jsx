import "./card.css";
//import pic from "../../asset/osas.jpg"
import styled from 'styled-components';
const CardItem = ({para,Image,heading3,link})=>{


    return(
        
        <Item >
        <img alt="osasd" src={Image}/>

        <div style={{padding:"15px"}}>
        <h3> {heading3}</h3>
        <p>{para}</p>
         <a href="osa.com">{link}</a>
           </div>
        
        </Item>
        
        
    )
}
export default CardItem



const Item = styled.div`
border-radius: 5px 5px 0 0;
    border: 1px solid rgb(48, 12, 180);
    width: 380px;
    background-color: #fff;
    margin-right: 20px;
    overflow: hidden;
    border: 1px solid ${props => props.theme.borderColor};
    -webkit-box-shadow: -2px 7px 21px -9px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -2px 7px 21px -9px rgba(0, 0, 0, 0.75);
    box-shadow: -2px 7px 21px -9px rgba(0, 0, 0, 0.75);
    img {
        width: 100%;
        height: 180px;
    }
    @media  (max-width: 800px) {
            margin-top: 20px;
    }

`;
    
