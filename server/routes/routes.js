import { Router } from "express";
import { addUser } from "../Controllers/UserController.js";
import { getUsersdetails } from "../Controllers/UserController.js";
import { getuser } from "../Controllers/UserController.js";
import { editUsers } from "../Controllers/UserController.js";
import { deleteUsers } from "../Controllers/UserController.js";

 
const router =Router()


router.post('/add', addUser)
router.get('/all',getUsersdetails)
router.get('/:id', getuser)
router.post('/edit/:id',editUsers)
router.delete('/edit/:id',deleteUsers)

export default router
