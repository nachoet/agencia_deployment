import { Testimonial } from "../models/testimoniales.js";

const guardarTestimonial = async (req, res) => {

    //validar el form

    const {nombre,correo,mensaje} = req.body;

    const errores = [];

    if (nombre.trim() === '') {
        errores.push({mensaje : 'Debe ingresar un nombre'});
    }
    if (correo.trim() === '') {
        errores.push({mensaje : 'Debe ingresar un correo'});
    }
    if (mensaje.trim() === '') {
        errores.push({mensaje : 'Debe ingresar un mensaje'});
    }

    if (errores.length > 0) {

        //consultar testimoniales
        const testimoniales = await Testimonial.findAll();


        //mostrar la vista con errores
        res.render('testimoniales', {
            pagina : 'testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    } else {
        //almacenar en la BBDD
        
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });

            res.redirect('/testimoniales');

        } catch (error) {
            console.error();
        }
    }

};


export {
    guardarTestimonial
}