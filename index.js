const express = require('express') //retorna uma função do módulo
const app = express() //cria uma cópia do framework para a const app
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Cliente = require('./models/Cliente')

// Config
    // Template Engine
        app.engine('handlebars', handlebars({extname:'handlebars', defaultLayout: 'main', layoutsDir: __dirname + '/views/layout/'})) //main é o template padrão da aplicação
        app.set('view engine','handlebars')
    // Config Body Parser
    app.use(bodyParser.urlencoded({extended:false}))
    app.use(bodyParser.json())

    
// Rotas

app.get('/',function(req,res){
    Cliente.findAll().then(function(clientes){ //{order:[['id','ASC ou DESC']]} PARA ORDERNAR 
        res.render('home',{clientes: clientes})
    }) //retorna todos posts que foram enviados
    
})
    app.get('/cad',function(req,res){
        res.render('formulario')
    })
    app.post('/add',function(req,res){
        Cliente.create({
            nome: req.body.nome,
            sobrenome: req.body.sobrenome
        }).then(function(){
            res.redirect('/')
        }).catch(function(erro){
            res.send("Erro ao criar cliente" +erro)
        })
    })


    app.get('/deletar/:id',function(req,res){
        Cliente.destroy({where: {'id':req.params.id}}).then(function(){
            res.send('Cliente deletado com sucesso')
        }).catch(function(erro){
            res.send('Esse cliente não existe')
        })
    })

app.listen(8081,function(){
    console.log("Servidor rodando na URL http://localhost:8081")
}) // sempre tem que ser a última linha do código
