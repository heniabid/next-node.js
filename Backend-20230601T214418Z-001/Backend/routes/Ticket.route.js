var express = require('express');
var router = express.Router();
// Créer une instance de Ticket.
const Ticket = require('../models/Ticket');
// afficher la liste des Ticket.
router.get('/', async (req, res )=> {
    try {
    const ticket = await Ticket.find();
    res.status(200).json(ticket);
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
    });
// créer un nouvelle Ticket
router.post('/', async (req, res) => {
    const { title, Type , date_Match,Prix,Image} = req.body;
    const newTicket = new Ticket({title:title,Type:Type,date_Match:date_Match,Prix,
        Image:Image})
    try {
    await newTicket.save();
    res.status(200).json(newTicket );
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
    });
// chercher une Ticket
router.get('/:TicketId',async(req, res)=>{
    try {
    const ticket = await Ticket.findById(req.params.TicketId);
    res.status(200).json(ticket);
} catch (error) {
res.status(404).json({ message: error.message });
}
});
// modifier une Ticket 
router.put('/:TicketId', async (req, res)=> {
    const { title, Type , date_Match,Prix,Image} = req.body;
    const id = req.params.TicketId;
    try {
    const ticket1 = {title:title,Type:Type,date_Match:date_Match,Prix,
        Image:Image};
    console.log(ticket1)
    await Ticket.findByIdAndUpdate(id, ticket1);
    res.json(ticket1);
    res.json({ message: "Ticket Updated successfully." });
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
    });

// Supprimer une Ticket
router.delete('/:TicketId', async (req, res)=> {
    const id = req.params.TicketId;
    await Ticket.findByIdAndDelete(id);
    res.json({ message: "Ticket deleted successfully." });
    });
module.exports = router;
