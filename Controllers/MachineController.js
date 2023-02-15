const Machine = require('../Models/machine')
const nodemailer = require("nodemailer");

exports.CreateMachine = async (req, res) => {

    try {

        const Result = await Machine.create(req.body)
        res.send(Result)


    } catch (error) {

        res.status(500).send(error)
    }

}


exports.FetchMachine = async (req, res) => {

    try {

        const Result = await Machine.find({})

        res.send(Result)


    } catch (error) {

        res.status(500).send(error)
    }

}


exports.FetchMachineById = async (req, res) => {

    try {

        const Result = await Machine.findById(req.params.idMachine)

        res.send(Result)


    } catch (error) {

        res.status(500).send(error)
    }

}

exports.UpdateMachine = async (req, res) => {

    try {

        const Result = await Machine.findByIdAndUpdate(req.params.idMachine, req.body)

        const Resultupdate = await Machine.findById(req.params.idMachine)
        /**
         * si deux machine sont status est false un email doit étre envoiyé automatique 
         */
        const stat = await Machine.find({ status: false })
        if (stat.length >= 2) {

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





        }
        res.send(Resultupdate)


    } catch (error) {

        res.status(500).send(error)
    }

}


exports.DeleteMachine = async (req, res) => {
    try {

        const Result = await Machine.findByIdAndDelete(req.params.idMachine)


        res.status(200).send('Machine deleted with success')
    } catch (error) {


        res.status(500).send('error serveur')
    }
}