//Author: Pedro Paulo Machado Silveira Souza
//Created-At: 30/04/2020 20:24
//Updated-At: -
//configuração da conexão com a database

module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '#PedroPaulo1309',
    database: 'clientes',
    define: {
        timestamps: true,  //created_at && updated_at
        underscored: true,
    },

};