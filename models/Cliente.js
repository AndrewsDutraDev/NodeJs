const db = require('./db')
const Cliente = db.sequelize.define('clientes',{
    nome:{
        type: db.Sequelize.STRING
    },
    sobrenome:{
        type: db.Sequelize.TEXT
    }
})
module.exports = Cliente

//Cliente.sync({force:true}) sempre após gerar a tabela, essa linha deve ser comentada/apagada