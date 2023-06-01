var express = require('express');
var router = express.Router();
// Créer une instance de Equipe.
const Equipe = require('../models/Equipe');
// afficher la liste des Equipe.
router.get('/', async (req, res )=> {
    try {
    const equipe = await Equipe.find();
    res.status(200).json(equipe);
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
    });
// créer un nouvelle Equipe
router.post('/', async (req, res) => {
    const { Nom_Equipe, Image} = req.body;
    const newEquipe = new Equipe({Nom_Equipe:Nom_Equipe,
        Image:Image})
    try {
    await newEquipe.save();
    res.status(200).json(newEquipe );
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
    });
// chercher une Equipe
router.get('/:EquipeId',async(req, res)=>{
    try {
    const equipe = await Equipe.findById(req.params.EquipeId);
    res.status(200).json(equipe);
} catch (error) {
res.status(404).json({ message: error.message });
}
});
// modifier une Equipe 
router.put('/:EquipeId', async (req, res)=> {
    const { Nom_Equipe, Image} = req.body;
    const id = req.params.EquipeId;
    try {
    const equipe1 = {
        Nom_Equipe:Nom_Equipe,Image:Image, _id:id };
    console.log(equipe1)
    await Equipe.findByIdAndUpdate(id, equipe1);
    res.json(equipe1);
    res.json({ message: "Equipe Updated successfully." });
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
    });

// Supprimer une Equipe
router.delete('/:EquipeId', async (req, res)=> {
    const id = req.params.EquipeId;
    await Equipe.findByIdAndDelete(id);
    res.json({ message: "Equipe deleted successfully." });
    });
module.exports = router;
