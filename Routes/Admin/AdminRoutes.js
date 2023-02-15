const express=require('express');
const passport = require('passport');
const { FetchAdmin, FetchAdminById, UpdateAdmin, DeleteAdmin } = require('../Controllers/Admin/AdminController');
const authRole = require('../Passport/RoleAllowed')

const router=express.Router()


router.get('/Admins' ,  passport.authenticate('bearer', { session: false }), authRole("Admin"),FetchAdmin )
router.get('/Admins/:idadmin' ,  passport.authenticate('bearer', { session: false }) ,authRole("Admin"),FetchAdminById)
router.put('/Admins/:idadmin' ,  passport.authenticate('bearer', { session: false })  ,authRole("Admin"), UpdateAdmin)
router.delete('/Admins/:idadmin'  ,  passport.authenticate('bearer', { session: false }),authRole("Admin"), DeleteAdmin)




module.exports=router