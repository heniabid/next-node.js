const mongoose =require("mongoose")
const Match=mongoose.Schema({
    Nom_Eq1: {
        type: String,
        required: [true, 'ajouter equipe 1']
    },
    Nom_Eq2: {
        type: String,
        required: [true, 'ajouter equipe 2']
    },
    Stade : {
        type: String,
        required: [true, 'ajouter  Stade']
    }
})
module.exports=mongoose.models.Match || mongoose.model('Match', Match);