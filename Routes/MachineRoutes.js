const express=require('express');
const authRole = require('../Passport/RoleAllowed')



const passport = require('passport');
const { FetchMachine, CreateMachine, FetchMachineById, UpdateMachine, DeleteMachine } = require('../Controllers/MachineController');

const router=express.Router()

router.get('/Machine',  passport.authenticate('bearer', { session: false }), authRole("Admin") , FetchMachine)
router.post('/Machine',  passport.authenticate('bearer', { session: false }), authRole("Admin") , CreateMachine)
router.get('/Machine/:idMachine',  passport.authenticate('bearer', { session: false }), authRole("Admin" ,"Client") , FetchMachineById)
router.put('/Machine/:idMachine',  passport.authenticate('bearer', { session: false }),authRole("Admin","Client") , UpdateMachine)
router.delete('/Machine/:idMachine' ,  passport.authenticate('bearer', { session: false }), authRole("Admin","Client"), DeleteMachine)




module.exports=router