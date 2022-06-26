const { Sequelize } = require('sequelize')

const sequelize = new Sequelize ('toughts' , 'root', '' ,{
    host: 'localhost',
    dialect: 'mysql'
}) 

try{
    sequelize.authenticate()
    console.log('Conectamos ao banco de dados!')
}catch{
    console.log(`Nao foi possivel conectar ao banco de dados:${err}`)
}

module.exports = sequelize