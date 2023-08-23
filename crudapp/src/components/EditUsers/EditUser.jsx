
import { FormGroup,FormControl,InputLabel,Input,Typography, styled, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { editUsers } from '../../Services/api'
import { useNavigate } from 'react-router-dom'
import { getuser } from '../../Services/api'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'


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


function EditUser() {
  const {id} = useParams();
 useEffect(()=>{
 loadUserDetails();
 

},[id]) 



const loadUserDetails =async()=>{
  const response = await getuser(id);
  setUser(response.data)
 
  console.log(response)

}

const editUserdetails = async()=> {

  const response = await editUsers(user,id);
  toast("Edits were saved successfully")
   console.log(response)

  
  navigate('/all')
  console.log(user)

}

  
// step 2 ---- creating a state for storing the user input

const [ user, setUser] = useState(defaultValue)
const navigate = useNavigate();


// creating an onchange function
  const handleChange = (e)=>{
    
    
    setUser({...user, [e.target.name]:e.target.value})
    
    
  }

 



  // step- 3  starts by making a function for API calling-- ended 
  return (
    <Container>

      <Typography variant='h4'>Edit user</Typography>
         <FormControl>
            <InputLabel>Name</InputLabel>
            <Input type="text"  onChange={(e)=>handleChange(e)} name='name' value={user.name}></Input>
         </FormControl>
         <FormControl>
            <InputLabel>UserName</InputLabel>
            <Input type="text" onChange={(e)=>handleChange(e)} name='username'value={user.username}></Input>
         </FormControl>
         <FormControl>
            <InputLabel>Email</InputLabel>
            <Input type="email"  onChange={(e)=>handleChange(e)} name='email' value={user.email}></Input>
         </FormControl>
         <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input type="text"  onChange={(e)=>handleChange(e)} name='phone' value={user.phone}></Input>
         </FormControl>
         <FormControl>
          <Button variant='contained' onClick={editUserdetails}>Update User</Button>
          

         </FormControl>
         
    </Container>
  )
}

export default EditUser