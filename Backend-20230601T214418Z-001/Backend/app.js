const express=require('express'); 
const  mongoose =require("mongoose") 
const dotenv =require('dotenv') 
const cors = require('cors') 
 dotenv.config() 
const app = express(); 
const equipeRouter =require("./routes/Equipe.route")
const stadeRouter =require("./routes/Stade.route")
const ticketRouter =require("./routes/Ticket.route")
const matchRouter =require("./routes/Match.route")


 //Les cors 
 app.use(cors())  
 //BodyParser Middleware
  app.use(express.json()); 
  app.use('/api/Equipe', equipeRouter);
  app.use('/api/Stade', stadeRouter);
  app.use('/api/Ticket', ticketRouter);
  app.use('/api/Match', matchRouter);
   mongoose.set("strictQuery", false);  
    // Connexion à la base données 
    mongoose.connect(process.env.DATABASE,{
        useNewUrlParser: true,
        useUnifiedTopology: true
        })
        .then(() => {console.log("Connexion à la base de données réussie");
        }).catch(err => {
        console.log('Impossible de se connecter à la base de données', err);
        process.exit();
        });

            
        app.get("/",(req,res)=>{
        res.send("Fédération Tunisienne de Football");
        });
        app.listen(process.env.PORT, () => {
        console.log(`Server is listening on port ${process.env.PORT}`); });
        module.exports = app;