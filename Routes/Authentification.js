const express=require('express');
const passport = require('passport');
const { register, login } = require('../Controllers/Authentification');
const authRole = require('../Middleware/Role')
const router=express.Router()




router.post('/register',register)
router.post('/login',login)
router.get('/profile', 
  passport.authenticate('bearer', { session: false }),authRole("Admin", "Client"),
  function(req, res) {
    res.json(req.user);
  });

  
module.exports=router