import "./card.css";
//import pic from "../../asset/osas.jpg"

const CardItem = ({para,Image,heading3,link})=>{


    return(
        
        <div className="item" >
        <img alt="osasd" src={Image}/>

        <div className="item2">
        <h3> {heading3}</h3>
        <p>{para}</p>
         <a href="osa.com">{link}</a>
           </div>
        
        </div>
        
        
    )
}
export default CardItem