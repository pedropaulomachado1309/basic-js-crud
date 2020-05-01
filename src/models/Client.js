const { Model, DataTypes } = require('sequelize');

//definindo como será nossa tabela Clients

class Client extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            phone: DataTypes.STRING,
            gender: DataTypes.STRING,
        }, {
            sequelize
        })
    }
};

module.exports = Client;