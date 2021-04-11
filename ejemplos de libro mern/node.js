var http = require('http')
const server = http.createServer(function (req, res) {
    res.writeHead(200, {'content-type': 'text/plain'})
    res.end('hola mundo')
})
server.listen(8000)