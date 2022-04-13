const http = require('http');
const mock = require('./mocks/users')

const server = http.createServer((req, res)=>{
  console.log(`Request Methods: ${req.headers} | Endpoint: ${req.url}`)

  if(req.url === '/users' && req.method === 'GET'){
    res.writeHead(200, {'content-type': 'application/json'});
    res.end(JSON.stringify(mock));
  }else{
    res.writeHead(404, {'content-type':'text/html'});
    res.end(`Cannot ${req.method} ${req.url}`)
  }

});

server.listen(3000, () => console.log('Server startet at http://localhost:3000'))