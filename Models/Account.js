const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const AccountSchema = new Schema(
    {
        firstName: { type: String, required: [true, 'Prénom obligatoire!'] },
        lastName: { type: String, required: [true, 'Nom de famille obligatoire!'] },
        email: { type: String, required: [true, 'E-mail obligatoire!'] } ,
        password: { type: String, required: true },
        address: { type: String, required: [true, 'Adresse obligatoire!'] },
        usine:[{ type: Schema.Types.ObjectId, ref: 'usine'}],
        role: {
            type: String,
            enum: ["Admin", "Client"],
            default: "Client"
        },

    },
    {
        timestamps : true , versionKey : false
    }
);

module.exports =
    mongoose.models.Account || mongoose.model('Account', AccountSchema);