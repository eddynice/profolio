import { createGlobalStyle } from "styled-components";


const Globalsty = createGlobalStyle `

*{
    margin: 0;
    padding: 0;
    font-family: 'Josefin Sans', sans-serif
    transition: all 0.3s ease 0s;
    scroll-behavior: smooth;

p, li, span, label, input, textarea {
        color: ${props => props.theme.secondaryText}
     }
    }
    
    `
export default Globalsty