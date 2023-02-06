// import fs from "fs";
// import http from "http";

// const port = 4000;

// const server = http.createServer((res, req) => {
//     if (req.url === "/") {
//         console.log("We'e hit the / endpoint", req.url);
//         res.writeHead(200, { "Content-Type": "text/html" });
//         fs.readFile("./index.html", (err, data) => {
//             if (err) throw err;
//             res.write(data);
//             res.end();
//         });
//     }
// });

// server.listen(port, (err) => {
//     if (err) {
//         console.log("Error", err.message);
//     }
//     console.log("listening on port", port);
// });

import fs from "fs"; // Importing out node package modules
import http from "http"; // will host our url

const  port = 4000; // port is where the server will be hosted

// req is an object containing information about the Http request that raises our event
// res - we use res to send back the desired Http response
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    console.log(req.url);

    res.writeHead(200, { "Content-Type": "text/html" }); // with .writeHead we are allowing JS to grab our content from "text.html"
    fs.readFile("./index.html", (err, data) => {
      if (err) throw err; //If we dont find our url we will be given a error
      res.write(data); // Here we are "writing" a response to the client which holds our Data
      res.end();
    });
  }

  if (req.url === "/api") {
    console.log(req.url);

    res.writeHead(200, { "Content-Type": "text/html" }); // with .writeHead we are allowing JS to grab our content from "text.html"
    fs.readFile("./page2.html", (err, data) => {
      if (err) throw err; //If we dont find our url we will be given a error
      res.write(data); // Here we are "writing" a response to the client which holds our Data
      res.end();
    });
  }
});

server.listen(port, (err) => {
  //Here we are telling our server to be hosted on port 4000 in our local host
  if (err) console.log("Error", err.message);
  console.log(`Listening on port ${port}`); // Here we are on port 4000
});