//Author: Pedro Paulo Machado Silveira Souza
//Created-At: 30/04/2020 20:24
//Updated-At: -
//Node.js (back-end) index-file da Database // Teste 5zeros

const Sequelize=require('sequelize');
const dbConfig=require('../config/database');

const Client=require('../models/Client');

const connection = new Sequelize(dbConfig);

Client.init(connection);

module.exports=connection;