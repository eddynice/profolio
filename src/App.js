import Header from './component/Header/Header';
import Side from './component/Side/Side';
import About from "./component/About/About"
import Form from "./component/Form/Form";
import  {Stock } from "./files"
import CardList from './component/Card/CardList';
import Navi from './component/Nav/Navi';
import { BrowserRouter} from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Globalsty from './GlobalStyle'
import { useSelector } from 'react-redux'
import Footer from './component/footer/Footer';

const S1 = styled.div`
    border-bottom: 1px solid var(--borderColor);
    overflow: auto;
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.textColor};
   
    


`;



const MainC = styled.div`
width: 1200px;
margin: 0 auto;
  @media (max-width: 1200px) {
    width: 95%;
  }
`;


function App() {
 const theme = useSelector((state) => state.theme);
 
 
    return (
<ThemeProvider theme={theme}>
<BrowserRouter>

<Globalsty/>
        <S1>
           
        <Header/>
        <MainC>
        
        <Navi/>
        <Side/>

        </MainC>
        <About/>
        
        <CardList Stock={Stock}/>
        <Form/>
        <Footer/>
       </S1>
       
        </BrowserRouter>
        </ThemeProvider>



    );
}

export default App;