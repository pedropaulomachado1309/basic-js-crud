//Author: Pedro Paulo Machado Silveira Souza
//Created-At: 30/04/2020 20:24
//Updated-At: -
//Node.js (back-end) router-file da Aplicação // Teste 5zeros

const express=require('express');
const ClientController=require('./controllers/ClientController');

const routes = express.Router();

routes.get('/update', ClientController.update);
routes.post('/update_data/:id', ClientController.update_data);

routes.get('/search', ClientController.search);
routes.get('/advanced_search', ClientController.advanced_search);

routes.get('/client_delete/:id', ClientController.client_delete);
routes.get('/delete_data', ClientController.delete_data);

routes.post('/add_client', ClientController.add_client);
routes.get('/create_client', (req, res) => {
    res.render('formulario');
});

routes.get('/', (req, res) => {
    res.render('index');
})

module.exports = routes;
