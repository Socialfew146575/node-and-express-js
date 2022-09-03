
const http = require("http");



const server = http.createServer(function (req, res) {
    // console.log(req.method);
    // console.log(req.url);
    const url = req.url;

    // *******HOME PAGE********
    if (url === '/') {


        // console.log('User hit the server');
        // res.end("Home Page");
        res.writeHead(200, { 'content-type': 'text/html' });
        // res.end(`<h1>Home Page</h1>`);

        res.write('<h1>Home Page</h1>');
        res.end();
    }

    // *********ABOUT PAGE*******

    else if(url==='/about'){
        res.writeHead(200, { 'content-type': 'text/html' });
       

        res.write('<h1>About Page</h1>');
        res.end();
    }

        //*****404 *******/
    else{
        res.writeHead(404, { 'content-type': 'text/html' });
       

        res.write('<h1>404</h1>');
        res.end();
    }

})

server.listen(5000);
