
import Alluser from './components/AllUser/alluser'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AddUser from './components/addUser/addUser'
import EditUser from './components/EditUsers/EditUser'
import { ToastContainer } from 'react-toastify'
function App() {

  return (
   <BrowserRouter>
        <Navbar/>
        <ToastContainer position="top-center"
             autoClose={2000}
             hideProgressBar={false}
             newestOnTop={false}
             closeOnClick
             rtl={false}
             pauseOnFocusLoss
             draggable
             pauseOnHover
             theme="dark"/>
       <Routes>
            
            <Route path='/all' element={<Alluser/>}/>
            <Route path='/add' element={<AddUser/>}/>
            <Route path='/edit/:id' element={<EditUser/>}/>
            
       </Routes>
   
   </BrowserRouter>
  )
}

export default App
