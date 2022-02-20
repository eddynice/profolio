import "./card.css";
import CardItem from "./CardItem"
import styled from 'styled-components';

const CardList = ({Stock})=>{


    return(
        < Container>
           
           <h1 className="h1">some of my project</h1>
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

`