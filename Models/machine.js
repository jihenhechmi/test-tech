const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const machineSchema = new Schema(
    {
        nom: { type: String, required: [true, 'nom obligatoire!'] },
        numéro: { type: Number , required: [true, 'numéro série  obligatoire!'] },
        catégorie: { type: String, required: [true, 'numéro série  obligatoire!'] } ,
        image : {type :Buffer},
        status :{type :Boolean , required :true}

    },
    {
        timestamps : true , versionKey : false
    }
);

module.exports =
    mongoose.models.machine || mongoose.model('machine', usineSchema);