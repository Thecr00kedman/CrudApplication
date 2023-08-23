// using axios for api calling

import axios from 'axios'
const URL ='http://localhost:8000';

// step- 4 make a function which will be called inside the adduserDetails to put the data in db
export const addUsers = async(data)=> {
    // data contains the data from frontend
    try {
         return await axios.post(`${URL}/add `,data)
    } catch (error) {
        console.log("error while calling the api")
    }
}

// now at last we need to import this api function in to the add user page.

// make an api for getting the data.

export const getUsers = async()=>{
    try {
        
       return await axios.get(`${URL}/all`)

    } catch (error) {
        console.log('error while calling the get Users api', error)
    }
}
export const getuser = async(id) =>{
    try {

        return await axios.get(`${URL}/${id}`);
        
    } catch (error) {

        console.log('error while calling the get user details api', error)
    }
}

export const editUsers = async(user,id) =>{

    try {
        return await axios.post(`${URL}/edit/${id}`, user)
        
    } catch (error) {
        console.log('error while calling the edit users api')
        
    }
}
export const deleteuser = async(id) =>{

    try {
        
        return await axios.delete(`${URL}/edit/${id}`)

    } catch (error) {
        console.log(error, 'error while calling the delete user api')
    }
}