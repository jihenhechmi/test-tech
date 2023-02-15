const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000 || process.env.PORT;
require('./Database/Connect');
require('./Middleware/Bearer')
// middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));



// initialize routes
const Authentification =  require('./Routes/Authentification')
const Machine =  require('./Routes/MachineRoutes')
const Usine =  require('./Routes/UsineRoutes')
const Admin =  require('./Routes/Admin/AdminRoutes')

/**
 * user routes
 */
app.use('/Api/V1' , Authentification)
app.use('/Api/V1' , Machine)
app.use('/Api/V1' , Usine)
app.use('/Api/V1' , Admin)

//PORT
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);