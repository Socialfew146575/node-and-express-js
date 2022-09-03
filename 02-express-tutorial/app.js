const http = require('http');

const { readFileSync } = require('fs');

const homePage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/styles.css');
const homeImage = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');


const server = http.createServer(function (req, res) {

    const url = req.url;



    // HTML
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(homePage);
        res.end();


    }


    // STYLES
    else if (url === '/styles.css') {
        res.writeHead(200, { 'content-type': 'text/css' });


        res.write(homeStyles);
        res.end();
    } 
    
    // IMAGE/LOGO
    else if (url === '/logo.svg') {
        res.writeHead(200, { 'content-type': 'image/svg+xml' });


        res.write(homeImage);
        res.end();
    } 
    
    // LOGIC
    
    else if (url === '/browser-app.js') {
        res.writeHead(200, { 'content-type': 'text/javascript' });


        res.write(homeLogic);
        res.end();
    } 



    //*****404 *******/
    else {
        res.writeHead(404, { 'content-type': 'text/html' });


        res.write('<h1>404</h1>');
        res.end();
    }



})

server.listen(5000);