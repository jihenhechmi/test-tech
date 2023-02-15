const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const usineSchema = new Schema(
    {
        nom: { type: String, required: [true, 'nom obligatoire!'] },
        Addresse: { type: String, required: [true, 'Addresse  obligatoire!'] },
        listemachine: [{ type: Schema.Types.ObjectId, ref: 'machine'}] ,
 

    },
    {
        timestamps : true , versionKey : false
    }
);

module.exports =
    mongoose.models.usine || mongoose.model('usine', usineSchema);