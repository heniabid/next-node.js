const mongoose =require("mongoose")
const Stade=mongoose.Schema({
    Nom_Stade: {
        type: String,
        required: [true, 'ajouter un stade']
    },
    Capacite: {
        type: String,
        required: [true, 'Svp ajouter la capacité de stade']
    } ,
    Desc: {
        type: String,
        required: [true, 'Svp ajouter une description']
    } 
    ,
    Image:{
         type: String, required: false 
    }
})
module.exports=mongoose.models.Stade || mongoose.model('Stade', Stade);