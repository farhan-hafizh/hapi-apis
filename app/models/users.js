const { DataTypes } = require('sequelize');
const Connection = require('../dbconfig');

const dbConnection = Connection.connect;

const User = dbConnection.define('users',
{
    name: {
        type: DataTypes.STRING
    },
    username: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
},{
    freezeTableName: true,
    timestamps: false
});

module.exports.createUser = (username,password,name) =>{
    User.create({username, password, name }).then((data)=>{
        return data
    })
}
