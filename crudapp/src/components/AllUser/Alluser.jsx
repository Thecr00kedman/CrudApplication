import React, { useEffect, useState } from 'react'
import { Table,TableBody,TableCell,TableRow ,TableHead, Button} from '@mui/material'
import { getUsers } from '../../Services/api'
import { Link, useNavigate } from 'react-router-dom';
import { deleteuser } from '../../Services/api';
import { ToastContainer } from 'react-toastify';

function Alluser() {
  
    
  const deleteusers = async (id) =>{


    deleteuser(id);
    getallUsers();
    
  }
    
    

  useEffect(()=>{
        getallUsers();

    },[])

    const [user, setUser] = useState([])

    const getallUsers = async()=>{

        const response = await getUsers();
        setUser(response.data)
        
        console.log(response.data);


    }
   
    

  return (
    <Table>
         <TableHead>
               <TableRow>
                   
                   <TableCell>Id</TableCell>
                   <TableCell>Name</TableCell>
                   <TableCell>Username</TableCell>
                   <TableCell>Email</TableCell>
                   <TableCell>Phone</TableCell>
               </TableRow>
         </TableHead>
         <TableBody>
            {
            
            user.map(user =>(
                <TableRow key={user._id}>
                      <TableCell>{user._id}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.username}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.phone}</TableCell>
                      <TableCell>
                      <TableCell>
                    <Button variant='contained' style={{marginRight:"10px"}} color='primary' component={Link} to={`/edit/${user._id}`}>Edit</Button>
                    <Button  variant='contained' color='secondary' onClick={()=>deleteusers(user._id)}>Delete</Button>
                   </TableCell>

                      </TableCell>
                </TableRow>
            ))
            
            }

         </TableBody>
    </Table>
  )
}

export default Alluser