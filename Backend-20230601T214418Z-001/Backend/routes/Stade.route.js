var express = require('express');
var router = express.Router();
// Créer une instance de Stade.
const Stade = require('../models/Stade');
// afficher la liste des Stade.
router.get('/', async (req, res )=> {
    try {
    const stade = await Stade.find();
    res.status(200).json(stade);
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
    });
// créer un nouvelle Stade
router.post('/', async (req, res) => {
    const { Nom_Stade, Capacite, Desc, Image} = req.body;
    const newStade = new Stade({Nom_Stade:Nom_Stade,
        Capacite:Capacite,Desc:Desc,Image:Image})
    try {
    await newStade.save();
    res.status(200).json(newStade );
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
    });
// chercher une Stade
router.get('/:StadeId',async(req, res)=>{
    try {
    const stade = await Stade.findById(req.params.StadeId);
    res.status(200).json(stade);
} catch (error) {
res.status(404).json({ message: error.message });
}
});
// modifier une Stade 
router.put('/:StadeId', async (req, res)=> {
    const { Nom_Stade, Capacite, Desc, Image} = req.body;
    const id = req.params.StadeId;
    try {
    const stade1 = {
        Nom_Stade:Nom_Stade,
        Capacite:Capacite,Desc:Desc,Image:Image, _id:id };
    console.log(stade1)
    await Stade.findByIdAndUpdate(id, stade1);
    res.json(stade1);
    res.json({ message: "Stade Updated successfully." });
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
    });

// Supprimer une Stade
router.delete('/:StadeId', async (req, res)=> {
    const id = req.params.StadeId;
    await Stade.findByIdAndDelete(id);
    res.json({ message: "Stade deleted successfully." });
    });
module.exports = router;