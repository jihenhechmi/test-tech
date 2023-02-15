const express=require('express');
const authRole = require('../Passport/RoleAllowed')



const passport = require('passport');
const { FetchUsine, CreateUsine, FetchUsineById, UpdateUsine, DeleteUsine } = require('../Controllers/UsineController');

const router=express.Router()

router.get('/Usine',  passport.authenticate('bearer', { session: false }), authRole("Admin") , FetchUsine)
router.post('/Usine',  passport.authenticate('bearer', { session: false }), authRole("Admin") , CreateUsine)
router.get('/Usine/:idUsine',  passport.authenticate('bearer', { session: false }), authRole("Admin","Client") , FetchUsineById)
router.put('/Usine/:idUsine',  passport.authenticate('bearer', { session: false }),authRole("Admin","Client") , UpdateUsine)
router.delete('/Usine/:idUsine' ,  passport.authenticate('bearer', { session: false }), authRole("Admin"), DeleteUsine)




module.exports=router