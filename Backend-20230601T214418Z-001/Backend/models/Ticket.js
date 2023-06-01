const mongoose =require("mongoose")
const Ticket=mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Ajouter un titre']
    },
    Type: {
        type: String,
        required: true
    },
    date_Match: {
        type: String,
        required: true,
    },
    Prix: {
        type: String, required: true
    },
    Image:{
         type: String, required: false 
    }
})
module.exports=mongoose.models.Ticket || mongoose.model('Ticket', Ticket);