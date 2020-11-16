import express from 'express';
import { 
    paginaDestinos, 
    paginaInicio, 
    paginaNosotros, 
    paginaTestimoniales,
    paginaViajes 
} 
from "../controllers/paginaControllers.js";
import { guardarTestimonial } from '../controllers/testimonialController.js';

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);
router.get('/viajes/:viaje', paginaDestinos);

router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial);

export default router;