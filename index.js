//commonjs
//require('dotenv').config({path:path.resolve('variables.env')});
//const express = require ('express');
import express from 'express';
import router from './routes/index.js';
import db from "./config/db.js";


import dotenv from 'dotenv';
dotenv.config();




const app = express();

//agregar body parser para poder leer los datos del formulario testimoniales
app.use(express.urlencoded({extended:true}));

//conectar base de datos
db.authenticate()
    .then( () => console.log('Se ha conectado a la BBDD') )
    .catch ( error => console.error())

//definir puerto
//const port = process.env.PORT || 4000;

//agregar router
app.use('/',router);

//habilitar pug
app.set('view engine','pug');

//middleware de fecha
app.use( (req,res,next) => {
    const year = new Date()
    res.locals.actualYear = year.getFullYear() ;
    res.locals.nombreSitio = 'Agencia de Viajes';
    next();
});



//definir carpeta publica
app.use(express.static('public'));

//puerto y host para la app

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port,host,() => {
    console.log(' El servidor esta funcionando')
});