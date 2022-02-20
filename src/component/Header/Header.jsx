import React from 'react';
import styled from 'styled-components';


const Head =styled.div`
display: grid;
text-align: center;
align-content: center;
    min-height: 10em;

`

export default function Header({title}) {
    return (
        <Head>
            <h1>{title}</h1>
        </Head>
    )
}


Header.defaultProps= {
    title: "Hi, I'm Osas Eddy",
}