const { DataTypes } = require('sequelize');
const Connection = require('../dbconfig');

const dbConnection = Connection.connect;

const Contact = dbConnection.define('contacts',{
    owner_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
},
{
    freezeTableName: true,
    timestamps: false
})
module.exports.createContact= (owner_id,name,email,phone) => {
    Contact.create({owner_id,name,email,phone})
}