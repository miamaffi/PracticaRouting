// controllers/productController.js
const autos = require('../db/index.js'); // objeto con la propiedad 'lista'
const productController = {
    // Todos los autos
    index: (req, res) => {
        res.render('autos', {
            title: 'Todos los Autos',
            listadoAutos: autos.lista
        });
    },

    // Autos por marca
    marca: (req, res) => {
        const marca = req.params.marca;
        const autosFiltrados = autos.lista.filter(auto => auto.marca === marca);
        res.render('autos', {
            title: `Autos de marca ${marca}`,
            listadoAutos: autosFiltrados
        });
    },

    // Autos por color
    color: (req, res) => {
        const color = req.params.color;
        const autosFiltrados = autos.lista.filter(auto => auto.color === color);
        res.render('autos', {
            title: `Autos de color ${color}`,
            listadoAutos: autosFiltrados
        });
    },

    // Autos por modelo
    modelo: (req, res) => {
        const modelo = req.params.modelo;
        const autosFiltrados = autos.lista.filter(auto => auto.modelo === modelo);
        res.render('autos', {
            title: `Autos modelo ${modelo}`,
            listadoAutos: autosFiltrados
        });
    },

    // Autos por año
    anio: (req, res) => {
        const anio = parseInt(req.params.anio); // convertir a número
        const autosFiltrados = autos.lista.filter(auto => auto.anio === anio);
        res.render('autos', {
            title: `Autos del año ${anio}`,
            listadoAutos: autosFiltrados
        });
    }
};

module.exports = productController;
