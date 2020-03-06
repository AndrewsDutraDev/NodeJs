const express = require('express') //retorna uma função do módulo
const app = express() //cria uma cópia do framework para a const app

app.get("/",function(req,res){
    res.send("Seja bem vindo ao meu app")
})
app.get("/sobre",function(req,res){
    res.send("Meu nome é Andrews")
})
app.get("/blog", function(req,res){
    res.send("Bem vindo ao meu blog")
})
app.get("/ola/:cargo/:nome/:cor",function(req,res){ // /: é um parametro
    res.send("Ola "+ req.params.nome + "<h2> Seu cargo é: "+req.params.cargo +"<h2>") //requisição usando parâmetros... Só pode mandar o .send uma vez dentro de uma rota
})

app.listen(8081,function(){
    console.log("Servidor rodando na URL http://localhost:8081")
}) // sempre tem que ser a última linha do código
