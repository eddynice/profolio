import React,{ useState} from 'react';
//import axios from 'axios'
import styled from 'styled-components';
const Form=()=>{
	const [name, setName]=useState('') 
	const [email, setEmail]=useState('')
	const [sub, setSub]=useState('')
	const [message, setMessage]=useState('')
	


	const submitForm = (e)=>{ 
		e.preventDefault();
		const Sub={
			name:name,
			email:email,
			sub:sub,
			message:message,

		}
		console.log(Sub)
		//axios.post('http://localhost:5000:/post').then(resp => {
fetch("http://localhost:5000/post/post",
{
	body: Sub,
	method: "post"
});
        setName('')
		setEmail()
		setSub('')
		setMessage('')
	}


    return(
        <Forms>
            <h2 className="h2">Get In Touch</h2>
            <FormContact id="form" className="contact-form" onSubmit={submitForm}> 
            <label>Name</label>
				<Input type="name "
				 className="input-field"
				   value={name}
				   onChange={(e)=>setName(e.target.value)}
				   />

				<label>subject</label>
				<Input type="name" className="input-field"
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
				<Button type="submit">SUBMIT</Button>
            </FormContact>
        </Forms>

    )
}

export default Form

const Forms = styled.div`
background-color: ${props => props.theme.secondaryColor};
.h2 {
    text-align: center;
    padding-top: 27px;
    padding-bottom: 27px;
    font-size: 27px;
    font-family: 'Russo One', sans-serif;
    font-weight: 500;
}

`;

const FormContact = styled.form`
display: block;
max-width: 600px;
margin: 0 auto;
border: 1px solid ${props => props.theme.borderColor};
padding: 15px;
border-radius: 5px;
background-color: ${props => props.theme.mainColor};
margin-bottom: 50px;
label {
    line-height: 2.7em;
}


`;
const Input = styled.input`
    background-color:${props => props.theme.secondaryColor};
    border: 1px solid ${props => props.theme.borderColor};
	
		width:100%;
		padding-top: 10px;
        padding-bottom: 10px;
        border-radius: 5px;
        font-size: 14px;

	
`;


const TextArea = styled.textarea`
min-height: 100px;
font-size: 14px;
background-color:${props => props.theme.secondaryColor};
    border: 1px solid ${props => props.theme.borderColor};
	width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 5px;
`;

const Button = styled.button`
    margin-top: 10px;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #fff;
    background-color:${props => props.theme.buttonColor};
    border: none;
`