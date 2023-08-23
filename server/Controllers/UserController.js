import { request, response } from 'express';
import User from '../Schema/userSchema.js'


export const addUser = async(request, response) =>{

    const user = request.body;
    // need to validate it, so making a schema in mongodb
    

    // validating the data sent from front end with the schema of database starts here

  const newUser = new User(user);

   try {
   await  newUser.save();
   
   response.status(201).json(newUser)

    
   } catch (error) {
    response.status(409).json({message:error.message})
   }

}

// api for getting user details
export const getUsersdetails = async(request,response)=>{
    try {
        const allUsers =await User.find()
        response.status(200).json(allUsers)
        
    } catch (error) {
        response.status(500).json({message:error.message})
        
    }
}

// api for getting a single user by id

export const getuser = async(request,response)=>{
    
    try {
        const allUsers =await User.findById(request.params.id)
        response.status(200).json(allUsers)
        
        
    } catch (error) {
        response.status(500).json('error while calling the get user api')
        
    }
}
// api for saving the changes to database
export const editUsers = async(request,response) => {

   try {

    const id = request.params.id
    

    const data = request.body
    const newuser = new User(data)

     await User.updateOne({_id:data._id},newuser)
    //  await User.findByIdAndUpdate(id,data) way-2
     response.status(200).json({message:'user updated successfully'})
    
   } catch (error) {
    response.status(500).json('error while calling the editusers api,',error)
    
   }
}
export const deleteUsers = async(request,response) =>{

   try {
    
    const deleteuser = await User.deleteOne({_id:request.params.id});
    response.status(200).json({message:'user deleted successfully'})

    
   } catch (error) {

    response.status(500).json('error while calling the delete users api')
    
   }


}

