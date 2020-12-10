const mongoose = require('mongoose');

const recetaSchema = new mongoose.Schema({


    nombre:{
        type:String,
        required:true
    },
    detalle:{
        type:String,
        required:true
    },
    foto:{
        type:String,
        required:true
    },
    tiempo:{
        type:Number,
        required:true
    },
    calorias:{
        type:Number,
        required:true
    },
   
    ingredientes:[
        
        {type:String}

    ]
})

module.exports = mongoose.model('Receta', recetaSchema);