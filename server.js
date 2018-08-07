const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const httpsPort = 443;
const httpPort = 80;

const mainHTML = fs.readFileSync('index.html')
const mainCSS = fs.readFileSync('css/index.css')
const mainJS = fs.readFileSync('js/main.js')

const resumePDF = fs.readFileSync('res/mnadresume.pdf')
const resumeJSON = fs.readFileSync('res/resume.json')

const terminalHTML = fs.readFileSync('html/terminal.html')


const server = http.createServer( (req,res) => {
  console.log(req.url);
  switch (req.url) {
    case '/css/index.css':
      res.writeHead(200, 'Content-Type','text/css');
      res.write(mainCSS);
      res.end();
      break;
    case '/js/main.js':
      res.writeHead(200, 'Content-Type','text/javascript');
      res.write(mainJS);
      res.end();
      break;
    case '/html/terminal.html':
      res.writeHead(200, 'Content-Type','text/html');
      res.write(terminalHTML);
      res.end();
      break;
    case '/res/resume.json':
      res.writeHead(200, 'Content-Type','application/json');
      res.write(resumeJSON);
      res.end();
      break;
    case '/res/mnadresume.pdf':
      res.writeHead(200, 'Content-Type','application/pdf');
      res.write(resumePDF);
      res.end();
      break;
    default:
      res.writeHead(200, 'Content-Type','text/html');
      res.write(mainHTML);
      res.end();
  }
})

server.listen(8080)


// TODO: HTTPS support, to be added later on
/*
http.createServer(
  res.statusCode = 200;
  res.setHeader('Content-Type','text/html');
  res.end(mainHTML);
).listen(443)
*/
