import React, { useState }  from 'react';
import styled from 'styled-components'
import {v4 as uuid4} from 'uuid'
 
import firebaseApp from 'firebase/firebaseConfig'

import Button from 'components/buttons/Button';
import FormInput from 'components/forms/FormInput';
import { UserAdd } from 'components/icons';


const WidgetStyles = styled.aside `  
    background:#ffffff;
    box-shadow:0 0 3px 0px #c5c5c5;
    border-radius: 8px;
    padding: 2rem;
    header{
      display:flex;
      align-items:center;
      margin-bottom:1rem;
    }
    svg{
      width:1.5rem;
      margin-right: 0.25rem;
    }
`


const AddEmployeeWidget = (props) => {

  const [name, setName] = useState('')
  const [department, setDepartment] = useState('') 
 
  console.log(name, department)

  function handleInsert(){
    // insert the data from state
    // create a unique id checking to see if that id is in the collection
    // pass firebase function off loaded to firebase cloud to process
    const id = uuid4().substr(0,8)
    console.log(id)
    // collec ref to employees
    const userId = firebaseApp.auth().currentUser.uid
    const newDocRef = firebaseApp.firestore().collection(userId).doc('hr').collection('employees').doc(id)
    newDocRef.set(
      {
        id,
        name,
        department
      }
    )
      // clear out input fields
      // setName('')

  }

    return ( 
       <WidgetStyles>
          <header>
            <UserAdd/>
              <h2>
               Add New Employee
              </h2>
          </header>
        <FormInput type="text" label="fullname" onChange={(e)=> setName(e.target.value)} />
        <FormInput type="text" label="department" onChange={(e)=> setDepartment(e.target.value)}/>
        <Button label="add employee" onClick={handleInsert}/>
       </WidgetStyles>
     );
}
 
export default AddEmployeeWidget;