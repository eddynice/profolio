//import "./card.css";
import CardItem from "./CardItem"
import styled from 'styled-components';

const CardList = ({Stock})=>{


    return(
        < Container>
           
           <h1 className="h1">Some of my Project</h1>
            <div className="cardItem">
            {Stock.map((Stocks)=>(
              
               

                    <CardItem 

                    key={Stocks.id}
                     para={Stocks.para}
                     Image={Stocks.Image}
                     heading={Stocks.heading}
                     heading3={Stocks.heading3}
                     link={Stocks.link}
                     
                      />
  
                    
            ))}
            </div>
            
        
    
        
        </Container>
    )
}
export default CardList

const Container = styled.div`
background-color: ${props => props.theme.bgColor};
border: 2px solid ${props => props.theme.borderColor};
h1{
    text-align: center;
    font-size: 27px;
    font-weight: 500;
    padding-top: 20px;
    padding-bottom: 20px; 
}
.cardItem {
    display: flex;
    justify-content: center;
    padding-bottom: 50px;
    flex-wrap: wrap;
    margin-left: 40px;
}
`