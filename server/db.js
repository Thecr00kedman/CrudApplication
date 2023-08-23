import mongoose from "mongoose";

const Connection = async() => {
  
    const URL='mongodb://127.0.0.1:27017/crudApplicaton'
    console.log('database connected successfully')
    try {
      await  mongoose.connect(URL,{UseUnifiedTopology:true,
                          UseNewUrlParser:true});
    } catch (error) {
        console.log("error while connecting the database", error)
        
    }
}

export default Connection;