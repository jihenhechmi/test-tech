
const Accounts = require('../Models/Account')
const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


exports.login = async (req, res) => {
  try {
    const user = await Accounts.findOne({ email: req.body.email })
    if (user != null && (await bcrypt.compare(req.body.password, user.passwordHashed))) {
      const data = {
        useremail: user.email,
        userId: user._id
      }
      var token = jwt.sign(data, 'secret', { expiresIn: '1d' });
      res.status(200).send({ message: 'connecté avec succés!', token: token })
    }
    else {
      res.status(400).send({ message: ' Verifier votre email ou mot de passe!' })
    }
  }
  catch (error) {
    res.status(500).send({ message: error.message || "An error occured" });
  }
}


exports.register = async (req, res) => {
  try {
    const Found = await Accounts.findOne({ email: req.body.email })
    if (Found !== null) {
      res.status(400).send({ message: 'E-mail déjà utilisé!' });
    }
    else {
      const salt = bcrypt.genSaltSync(10);
      req.body.passwordHashed = bcrypt.hashSync(req.body.password, salt);
      let transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: "*********************",
          pass: "******************",
        },
      });
      await transporter.sendMail({
        from: "*********************",
        to: `${req.body.email}`,
        subject: "Inscription",
        html: `<h1>Thanks For Joining Us!</h1> 
          <p> Hello  ${req.body.firstName} ${req.body.lastName},you are now a member in our <br><br>
            ,we are proud to have you among <br><br>
          us ,thanks again for your trust!</p>
          You can now join the platform :<br><br>
          Your email: ${req.body.email}<br>
          Your password :${req.body.password}<br>
           
          
          `
      })
      await Accounts.create(req.body)
      res.status(201).send({ message: 'Inscrit avec succés!' })
    }
  } catch (error) {
    res.status(500).send({ message: error.message || "An error occured" });
  }

}
