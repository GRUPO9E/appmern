const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://satnetsas:$MaThi326$@cluster0.cpzj5.mongodb.net/SATNET')
   .then(data => console.log("La base de datos está conectada"))
    .catch(err => console.log("Error db", err));

