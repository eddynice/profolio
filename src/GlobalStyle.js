import { createGlobalStyle } from "styled-components";


const Globalsty = createGlobalStyle `

*{
    margin: 0;
    padding: 0;
    transition: 0.3s;
    
    font-family: 'Josefin Sans', sans-serif;
p, li, span, label, input, textarea {
        color: ${props => props.theme.secondaryText}
     }
    }
    
    `

export default Globalsty