var express = require('express');
var http = require('http');

var app = express();
var server = http.createServer(app);

app.get('/', function(req, res) {
    res.send("Servidor node instalado com sucesso em container docker!");
});

server.listen(8080);
console.log('O servidor expres esta rodando na porta: %s', server.address().port);