import mongoose from "mongoose";

const coloreSchema = mongoose.Schema({
    nombreColor: { 
        type: String, 
        required: true,
        trim: true
    },
    codigoColor: { 
        type: String,
        trim: true,
        required: true,
    }
})

const Colore = mongoose.model('colore', coloreSchema);

export default Colore