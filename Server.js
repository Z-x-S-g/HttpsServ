const http = require("http")

const prompt = require('prompt-sync')();

const host = prompt('What is your Ip-Adress? (Only IPv4) ');

const port = 80

const server = http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type': 'text/plane'})
    res.write("Hola!")
    res.end()
})

server.listen(port,prompt, () => {
    console.log("servidor funcionando en ", host, port)

})

