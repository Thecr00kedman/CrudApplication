import express from 'express'
import Connection from './db.js';
import Routes from './routes/routes.js';
import cors from 'cors'




const app = express();
app.use(express.json())
const PORT = 8000;

// app.use(bodyParser.json({extended:true}));
// app.use(bodyParser.urlencoded({encoded:true}));


app.use(cors())



app.use('/',Routes);
 

Connection();

app.listen(PORT,()=>console.log(`Server is running on the port ${PORT}`))
