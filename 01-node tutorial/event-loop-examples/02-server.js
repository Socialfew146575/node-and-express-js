const http = require('http');

const server = http.createServer(function(req,res){

    console.log("request event");
    res.end("Hello world");
})

server.listen(5000,function(){

    console.log('Server listening on port : 5000');
})