import React, {useContext, useState} from 'react';
import styled from 'styled-components'
import FormInput from './../components/forms/FormInput'
import Button from './../components/buttons/Button'

import AuthContext from 'auth/AuthContext'
import firebaseApp from './../firebase/firebaseConfig';
import {Redirect} from 'react-router-dom'
 
const RegisterPageStyles = styled.div ` 
max-width: 480px;
margin: 6rem auto 0;
header{
    text-align:center;
    margin-bottom: 2rem;
}
    h1{
        font-size: 2rem;
        font-weight:600;
    }
    .jimo{
        background:grey;
    }
    button{
        margin-top:2rem;
    }
     

`


const RegisterPage = (props) => {

    const auth = useContext(AuthContext)
    const [email, setEmail]=useState('adam@home.com')
    const [password, setPassword]=useState('123456')
    const [isValid, setIsValid] = useState(false) 

        console.log(password)

    // component logic
    const handleLogin = (e) =>{
    //     firebaseApp
    //   .auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .then((userCredential) => {
    //     auth.authenticated = true;
    //     setIsValid(true);
    //   })
    //   .catch((error) => {
    //     console.log(error.code, error.message);
    //   });
    firebaseApp.auth()
    .createUserWithEmailAndPassword(email,password)
    .then((userCredential) => {// Redirect to login route
        return <Redirect to="/login" />;
        auth.authenticated = true;
        setIsValid(true);
 //Use conditional rendering
}).catch((error) => {
    // Catch errors
    // You do not have to handle errors});

});
    }

    if (isValid) {
        return <Redirect to="/dashboard" />;
      } else{
        
            return (
                 <RegisterPageStyles>
                     
                     <header>
                         <h1>Unlimited Trial Account</h1>
                          <p>no credit card required</p>
                     </header>
        
        
                  <FormInput   inputType="text" label="name on the account" />
                  <FormInput   inputType="email" label="valid email address"/>
                  <FormInput   inputType="password" label="password (8 charachters)"/>
                  <Button onClick={handleLogin} label="create a new account" uiStyle="login"/>
        
                 </RegisterPageStyles>
        
            );
        }
      }
    


 
export default RegisterPage;