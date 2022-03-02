const Sequelize = require('sequelize')

const sequelize = new Sequelize('hapi_api', 'root','toor',{
    host: process.env['DB_HOST'],
    port: process.env['DB_PORT'],
    dialect: 'mysql'
})

module.exports.connect =  sequelize

