
import { FormGroup,FormControl,InputLabel,Input,Typography, styled, Button } from '@mui/material'
import React, { useState } from 'react'
import { addUsers } from '../../Services/api'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Container = styled(FormGroup)`
width:50%;
margin:auto;

margin-top:5% auto 0 auto;
& div{
  margin-top:20px;

}
` 
const defaultValue = {
  name:'',
  username:'',
  email:'',
  phone:'',
}


function AddUser() {
// step 2 ---- creating a state for storing the user input

const [ user, setUser] = useState(defaultValue)
const navigate = useNavigate();


// creating an onchange function
  const handleChange = (e)=>{
    
    console.log(e.target.name,e.target.value)
    setUser({...user, [e.target.name]:e.target.value})
    console.log(user)
    
  }
// creating an onchange function ** ended step 2 - ended 

// step- 3  starts by making a function for API calling-- create an api. js file 

const adduserDetails = async()=>{
    
  toast("user added successfully")
     await addUsers(user);
    
    navigate('/all');
    
  // call the api function here

}


  // step- 3  starts by making a function for API calling-- ended 
  return (
    <Container>

      <Typography variant='h4'>Add user</Typography>
         <FormControl>
            <InputLabel>Name</InputLabel>
            <Input type="text"  onChange={(e)=>handleChange(e)} name='name'></Input>
         </FormControl>
         <FormControl>
            <InputLabel>UserName</InputLabel>
            <Input type="text" onChange={(e)=>handleChange(e)} name='username'></Input>
         </FormControl>
         <FormControl>
            <InputLabel>Email</InputLabel>
            <Input type="email"  onChange={(e)=>handleChange(e)} name='email'></Input>
         </FormControl>
         <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input type="text"  onChange={(e)=>handleChange(e)} name='phone'></Input>
         </FormControl>
         <FormControl>
          <Button variant='contained' onClick={()=>adduserDetails()}>Add User</Button>
          <ToastContainer
          position="bottom-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          theme="light"
         />
         </FormControl>
         
    </Container>
  )
}

export default AddUser