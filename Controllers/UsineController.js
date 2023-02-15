const Usine = require('../Models/Usine')

exports.CreateUsine = async (req, res) => {

    try {

        const Result = await Usine.create(req.body)
        res.send(Result)


    } catch (error) {

        res.status(500).send(error)
    }

}


exports.FetchUsine = async (req, res) => {

    try {

        const Result = await Usine.find({})

        res.send(Result)


    } catch (error) {

        res.status(500).send(error)
    }

}


exports.FetchUsineById = async (req, res) => {

    try {

        const Result = await Usine.findById(req.params.idUsine)

        res.send(Result)


    } catch (error) {

        res.status(500).send(error)
    }

}

exports.UpdateUsine = async (req, res) => {

    try {

        const Result = await Usine.findByIdAndUpdate(req.params.idUsine, req.body)

        const Resultupdate = await Usine.findById(req.params.idUsine)

        res.send(Resultupdate)


    } catch (error) {

        res.status(500).send(error)
    }

}


exports.DeleteUsine = async (req, res) => {
    try {

        const Result = await Usine.findByIdAndDelete(req.params.idUsine)


        res.status(200).send('Usine deleted with success')
    } catch (error) {


        res.status(500).send('error serveur')
    }
}