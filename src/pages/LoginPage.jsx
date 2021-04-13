import React, {useContext, useState} from 'react';
import styled from 'styled-components'
import {Redirect} from 'react-router-dom'

import AuthContext from 'auth/AuthContext'
import FormInput from './../components/forms/FormInput'
import Button from '../components/buttons/Button'
import firebase from './../firebase/firebaseConfig'
import firebaseApp from './../firebase/firebaseConfig';


const LoginPageStyles = styled.div `  
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
const LoginPage = (props) => {

    const auth = useContext(AuthContext)
    const [email, setEmail]=useState('adam@home.com')
    const [password, setPassword]=useState('123456')
    const [isValid, setIsValid] = useState(false) 

        console.log(password)

    // component logic
    const handleLogin = (e) =>{
        firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        auth.authenticated = true;
        setIsValid(true);
        console.log(userCredential)
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
    }

    if (isValid) {
        return <Redirect to="/dashboard" />;
      } else {
        return (
          <LoginPageStyles>
            <header>
              <h1>Account Login</h1>
              <p>access your employee manager</p>
            </header>
      
            <FormInput
              inputType="email"
              label="valid email address"
              onChange={(e) => setEmail(e.target.value.trim())}
            />
            <FormInput
              inputType="text"
              label="password (8 charachters)"
              onChange={(e) => setPassword(e.target.value.trim())}
            />
            <Button
              onClick={handleLogin}
              label="login to your account"
              uiStyle="signup"
            />
          </LoginPageStyles>
        );
      }
    };
    
    export default LoginPage;