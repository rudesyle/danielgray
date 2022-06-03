const nodemailer = require('nodemailer');

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      }); 

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: 'jeff.rudesyle@gmail.com',
      pass: 'Welcome12345',
    },
  });

  var mailOptions = {
    from: 'jeff.rudesyle@gmail.com',
    to: 'rudesyle@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
