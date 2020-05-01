//Author: Pedro Paulo Machado Silveira Souza
//Created-At: 30/04/2020 20:24
//Updated-At: -
//Arquivo Controller dos Clientes, builda as funções e as envia para as rotas

const Client=require('../models/Client');
const bodyParser=require('body-parser');

//função que faz a atualização

const update_data = async (req, res) => {
    const { originalName: name, email, phone, gender } = req.body;
  
    const { id } = req.params;
    const [ updated ] = await Client.update(req.body, {
        where: { id: id }
    });
    if(updated) {
        const updatedClient = await Client.findOne({ where: { id: id } });
        return res.status(200).send('Cliente atualizado com exito.');
    }
    throw new Error('Não foi possivel atualizar o cliente.1');
};

//resposta pro update

const update = (req, res) => {
    Client.findAll().then((clients) => {
        return res.render('update', {clients:clients});
    }).catch((err) => {
        return res.send('Ocorreu um erro inesperado ao procurar os clientes.');
    });
};

//resposta para delecao

const client_delete = (req, res) => {
    Client.destroy({where: {'id': req.params.id}}).then((clients) => {
        return res.send('Cliente deletado com sucesso.');
    }).catch((err) => {
        return res.send('Ocorreu um erro inesperado ao procurar os clientes.');
    });
};

//parte da adição de clientes

const add_client = async (req, res) => {
    const { originalName: name, email, phone, gender } = req.body;

    try {
      const client = await Client.create(req.body);
      return res.status(201).send('Cliente criado com exito.');
    } catch (error) {
      return res.status(500).send('Erro inesperado, cliente não cadastrado!')
    }
  }

//parte de deleção de clientes da database

const delete_data =(req, res) => {
    Client.findAll().then((clients) => {
        return res.render('delete', {clients:clients});
    }).catch((err) => {
        return res.send('Ocorreu um erro inesperado ao procurar os clientes.');
    });
};

//parte de busca de todos os clientes

const search = (req, res) => {
    Client.findAll().then((clients) => {
        return res.render('search', {clients:clients});
    }).catch((err) => {
        return res.send('Ocorreu um erro inesperado ao procurar os clientes.');
    });
};

//parte de busca com passagem de parametros

const advanced_search = (req, res) => {
    const { Op } = require("sequelize");

    Client.findAll({
        where: {
        [Op.or]: [
          { id: req.query.keyId },
          { name: req.query.keyName },
          { email: req.query.keyEmail },
          { phone: req.query.keyPhone },
          { gender: req.query.keyGender }]}
        }).then((clients) => {
            return res.render('advanced_search', {clients:clients});
        }).catch((err) => {
            console.log(err);
            return res.send('Ocorreu um erro inesperado ao procurar os clientes.');
        });
};

//exportação para depois importar nas rotas

module.exports={
    
    update,

    update_data,

    client_delete,

    add_client,

    delete_data,

    search,

    advanced_search,

    
};