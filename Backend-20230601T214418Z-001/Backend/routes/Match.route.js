var express = require('express');
var router = express.Router();
// Créer une instance de Match.
const Match = require('../models/Match');
// afficher la liste des Match.
router.get('/', async (req, res )=> {
    try {
    const match = await Match.find();
    res.status(200).json(match);
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
    });
// créer un nouvelle Match
router.post('/', async (req, res) => {
    const { Nom_Eq1, Nom_Eq2,Stade} = req.body;
    const newMatch = new Match({Nom_Eq1:Nom_Eq1,
        Nom_Eq2:Nom_Eq2,Stade:Stade})
    try {
    await newMatch.save();
    res.status(200).json(newMatch );
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
    });
// chercher une Match
router.get('/:MatchId',async(req, res)=>{
    try {
    const match = await Match.findById(req.params.MatchId);
    res.status(200).json(match);
} catch (error) {
res.status(404).json({ message: error.message });
}
});
// modifier une Match 
router.put('/:MatchId', async (req, res)=> {
    const { Nom_Eq1, Nom_Eq2,Stade} = req.body;
    const id = req.params.MatchId;
    try {
    const match1 = {Nom_Eq1:Nom_Eq1,
        Nom_Eq2:Nom_Eq2,Stade:Stade};
    console.log(match1)
    await Match.findByIdAndUpdate(id, match1);
    res.json(match1);
    res.json({ message: "Match Updated successfully." });
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
    });

// Supprimer une Match
router.delete('/:MatchId', async (req, res)=> {
    const id = req.params.MatchId;
    await Match.findByIdAndDelete(id);
    res.json({ message: "Match deleted successfully." });
    });
module.exports = router;
