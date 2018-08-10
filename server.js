const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();
const mailer = require('nodemailer');

const hostname = '127.0.0.1';
const httpsPort = 443;
const httpPort = 80;

const email = fs.readFileSync('config.txt', "utf8");

const mainHTML = fs.readFileSync('index.html');
const mainCSS = fs.readFileSync('css/index.css');
const mainJS = fs.readFileSync('js/main.js');

const resumePDF = fs.readFileSync('res/mnadresume.pdf');
const resumeJSON = fs.readFileSync('res/resume.json');

const terminalHTML = fs.readFileSync('terminal.html');
const xtermCSS = fs.readFileSync('node_modules/xterm/dist/xterm.css');
const xtermJS = fs.readFileSync('node_modules/xterm/dist/xterm.js');
const termJS = fs.readFileSync('js/term_portfolio.js');

app.get('*', (req, res) => {
  console.log(req.url);
  switch (req.url) {
    case '/css/index.css':
      console.log(req.url + "sent");
      res.writeHead(200, 'Content-Type','text/css');
      res.write(mainCSS);
      res.end();
      break;
    case '/js/main.js':
      console.log(req.url + "sent");
      res.writeHead(200, 'Content-Type','text/javascript');
      res.write(mainJS);
      res.end();
      break;
    case '/terminal.html':
      console.log(req.url + "sent");
      res.writeHead(200, 'Content-Type','text/html');
      res.write(terminalHTML);
      res.end();
      break;
    case '/node_modules/xterm/dist/xterm.css':
      console.log(req.url + "sent");
      res.writeHead(200, 'Content-Type','text/css');
      res.write(xtermCSS);
      res.end();
      break;
    case '/node_modules/xterm/dist/xterm.js':
      console.log(req.url + "sent");
      res.writeHead(200, 'Content-Type','text/javascript');
      res.write(xtermJS);
      res.end();
      break;
    case '/js/term_portfolio.js':
      console.log(req.url + "sent");
      res.writeHead(200, 'Content-Type','text/javascript');
      res.write(termJS);
      res.end();
      break;
    case '/res/resume.json':
      console.log(req.url + "sent");
      res.writeHead(200, 'Content-Type','application/json');
      res.write(resumeJSON);
      res.end();
      break;
    case '/res/mnadresume.pdf':
      console.log(req.url + "sent");
      res.writeHead(200, 'Content-Type','application/pdf');
      res.write(resumePDF);
      res.end();
      break;
    default:
      console.log(req.url + "sent");
      res.writeHead(200, 'Content-Type','text/html');
      res.write(mainHTML);
      res.end();
  }
});

app.listen(
  3000, () => console.log('Listening on port 3000!'
));

app.post('*', function(req, res) {

  let emailInfo = email.split(" ");

  let transporter = mailer.createTransport({
    host:'gmail',
    auth: {
      user: email[0],
      pass: email[1]
    }
  });

  let outMail = {
    from: email[0],
    to: email[0],
    subject: req.body.subject,
    text: "From" + req.body.email + " with name: " + req.body.name + "\n" + req.body.message
  }

  transport.sendMail(mail, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.message);
    }

    transport.close();
  });
  res.writeHead(200, 'Content-Type','text/html');
  res.write(mainHTML);
  res.end();
});

// const server = http.createServer( (req,res) => {
//   console.log(req.url);
//   switch (req.url) {
//     case '/css/index.css':
//       console.log(req.url + "sent");
//       res.writeHead(200, 'Content-Type','text/css');
//       res.write(mainCSS);
//       res.end();
//       break;
//     case '/js/main.js':
//       console.log(req.url + "sent");
//       res.writeHead(200, 'Content-Type','text/javascript');
//       res.write(mainJS);
//       res.end();
//       break;
//     case '/terminal.html':
//       console.log(req.url + "sent");
//       res.writeHead(200, 'Content-Type','text/html');
//       res.write(terminalHTML);
//       res.end();
//       break;
//     case '/node_modules/xterm/dist/xterm.css':
//       console.log(req.url + "sent");
//       res.writeHead(200, 'Content-Type','text/css');
//       res.write(xtermCSS);
//       res.end();
//       break;
//     case '/node_modules/xterm/dist/xterm.js':
//       console.log(req.url + "sent");
//       res.writeHead(200, 'Content-Type','text/javascript');
//       res.write(xtermJS);
//       res.end();
//       break;
//     case '/js/term_portfolio.js':
//       console.log(req.url + "sent");
//       res.writeHead(200, 'Content-Type','text/javascript');
//       res.write(termJS);
//       res.end();
//       break;
//     case '/res/resume.json':
//       console.log(req.url + "sent");
//       res.writeHead(200, 'Content-Type','application/json');
//       res.write(resumeJSON);
//       res.end();
//       break;
//     case '/res/mnadresume.pdf':
//       console.log(req.url + "sent");
//       res.writeHead(200, 'Content-Type','application/pdf');
//       res.write(resumePDF);
//       res.end();
//       break;
//     default:
//       console.log(req.url + "sent");
//       res.writeHead(200, 'Content-Type','text/html');
//       res.write(mainHTML);
//       res.end();
//   }
// })
//
// server.listen(8080)
//
//
// // TODO: HTTPS support, to be added later on
// /*
// http.createServer(
//   res.statusCode = 200;
//   res.setHeader('Content-Type','text/html');
//   res.end(mainHTML);
// ).listen(443)
// */
