const express = require('express');
const Receta = require('../models/receta');
const router = express.Router();


router.get('/', async (req,res) =>{
    try{
        const misRecetas = await Receta.find();
        res.json(misRecetas);
    }catch{
        res.send("Error" + err);
    }
})

router.get('/BuscaNom/:nombre', async (req,res) =>{
    try{
        const misRecetas = await Receta.find(
            {'nombre' : {'$regex' : req.params.nombre, '$options': "i"}}
        );
        res.json(misRecetas);
    }catch{
        res.send("Error" + err);
    }
})

router.post('/', async(req,res) =>{
    const receta = new Receta({
        nombre: req.body.nombre,
        detalle: req.body.detalle,
        foto: req.body.foto,
        tiempo: req.body.tiempo,
        calorias: req.body.calorias,
        ingredientes: req.body.ingredientes
    })

    try{
        const re1 = await receta.save();
        res.json('Receta guardada con éxito');
    }catch{
        res.send("Error " + err);
    }
})

module.exports = router;


