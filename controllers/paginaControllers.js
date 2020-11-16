import {Viaje } from "../models/viaje.js";
import { Testimonial } from "../models/testimoniales.js";


const paginaInicio = async (req, res) => {

    //consulatr base datos y traer tres viajes hacia el inicio

    const promiseDB = [];

    promiseDB.push(Viaje.findAll({limit:3}));
    promiseDB.push(Testimonial.findAll({limit:3}));

    try {

        const resultado = await Promise.all(promiseDB)

        res.render('inicio', {
            pagina:'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });
    } catch (error) {
        console.error();
    }

    res.render('inicio', {
        pagina:'Inicio',
        clase: 'home'
    });
}

const paginaNosotros = (req, res) => {

    res.render('nosotros', {
        pagina : ' Nosotros'
    });
}

const paginaViajes = async (req, res) => {

    //consultar la BBDD
    const viajes = await Viaje.findAll();

    res.render('viajes', {
        pagina : ' Próximos viajes',
        viajes
    });
}

const paginaTestimoniales = async (req, res) => {

    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina : ' Testimoniales',
            testimoniales
        });
    } catch (error) {
        console.error();
    }
   
}

//muestra un viaje por su slug
const paginaDestinos = async (req,res) => {
    
    //console.log(req.params);

    const {viaje} = req.params;

    try {
        const resultado = await Viaje.findOne({ where: {slug : viaje} });
        res.render('viaje', {
            pagina : 'Informacion Viaje',
            resultado
        })
    } catch (error) {
        console.error();
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDestinos
}