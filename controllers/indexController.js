// controllers/indexController.js

// const indexController = {
//   index: (req, res) => {
        // Renderiza la vista 'index.ejs' y le pasa datos
  //      res.render('index', { 
    //        title: 'Bienvenido a mi app',
      //      mensaje: 'Hola, esta es la página principal'
        //});
    //}
//};

//module.exports = indexController;

const autos = require('../db/index.js'); // <-- tu lista de autos

const indexController = {
    index: (req, res) => {
        res.render('index', { 
            title: 'Bienvenido',
            mensaje: 'Esta es la página principal',
            listadoAutos: autos.lista   // <--- esto es lo que faltaba
        });
    }
};
module.exports = indexController;

