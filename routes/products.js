const express = require("express");
const router = express.Router();

const autos = require("../db/index.js")

// traer el controller
const controller = require("../controllers/productController.js")
router.get('/', controller.index); 
// http://localhost:3000/products

router.get('/brand/:marca', controller.marca); 
// http://localhost:3000/products/brand/Honda


router.get('/color/:color', controller.color); 
// http://localhost:3000/products/color/Azul


router.get('/model/:modelo',controller.modelo ); 
// http://localhost:3000/products/model/Corolla


router.get('/year/:anio', controller.anio); 
// http://localhost:3000/products/year/2020

module.exports = router;
