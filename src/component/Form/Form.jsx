import React,{ useState} from 'react';
//import axios from 'axios'
import styled from 'styled-components';
import "./foem.css"
const Form=()=>{
	const [text, setText]=useState('') 
	const [email, setEmail]=useState('')
	const [sub, setSub]=useState('')
	const [message, setMessage]=useState('')
	


	const submitForm = (e)=>{ 
		e.preventDefault();
		const Sub={
			text:text,
			email:email,
			sub:sub,
			message:message,

		}
		console.log(Sub)
		fetch.post("/messages/",Sub);
        setText('')
		setEmail()
		setSub('')
		setMessage('')
	}


    return(
        <Forms>
            <h2 className="h2">Get In Touch</h2>
            <FormContact form className="contact-form" onSubmit={submitForm}> 
            <label>Name</label>
				<Input type="text "
				 className="input-field"
				   value={text}
				   onChange={(e)=>setText(e.target.value)}
				   />

				<label>subject</label>
				<Input type="text" className="input-field"
				 value={email}
				 onChange={(e)=>setEmail(e.target.value)}
				/>


				<label>Email</label>
				<Input type="email" className="input-field"
				 value={sub}
				 onChange={(e)=>setSub(e.target.value)}
				name="name"/>
				
				<label>Messages</label>
				<TextArea className="input-field"
				 value={message}
				 onChange={(e)=>setMessage(e.target.value)}
				name="Messages">
					
				</TextArea> 
				<Input type="submit" id="submit-btn" value='subit'/>
            </FormContact>
        </Forms>

    )
}

export default Form

const Forms = styled.div`
background-color: ${props => props.theme.secondaryColor};

`;

const FormContact = styled.form`
display: block;
max-width: 600px;
margin: 0 auto;
border: 1px solid ${props => props.theme.borderColor};
padding: 15px;
border-radius: 5px;
background-color: ${props => props.theme.mainColor}
margin-bottom: 50px;

`;
const Input = styled.input`
    background-color:${props => props.theme.secondaryColor};
    border: 1px solid ${props => props.theme.borderColor};
`;

const Label = styled.label`
line-height: 2.7em;
`;

const TextArea = styled.textarea`
min-height: 100px;
font-size: 14px;
background-color:${props => props.theme.secondaryColor};
    border: 1px solid ${props => props.theme.borderColor};
`;

const Button = styled.button`
    margin-top: 10px;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #fff;
    background-color: var(--buttonColor);
    border: none;
`