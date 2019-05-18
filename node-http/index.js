const http= require('http');

const hostname ='localhost';
const port = 3000;

const server = http.createServer((req,res)=>{

        console.log(req.headers);
        res.statusCode=200;
        res.setHeader('Content-Type','Text/html');
        res.end('<htm><body><h1>Hello,world<h1></body></html>');

})

server.listen(port,hostname,()=>{

    console.log(`Server running at http://${hostname}:${port}/`);


});