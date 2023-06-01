const mongoose =require("mongoose")
const Equipe=mongoose.Schema({
    Nom_Equipe: {
        type: String,
        required: true
    },
    Image:{
         type: String, required: false 
    }
})
module.exports=mongoose.models.Equipe || mongoose.model('Equipe', Equipe);