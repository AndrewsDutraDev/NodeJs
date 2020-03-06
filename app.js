var http = require("http")
http.createServer(function(req,res){
    res.end("Hello World! Welcome to my WebSite") //enviar uma mensagem
}).listen("8081")
console.log("Servidor rodando")