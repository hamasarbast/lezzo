const http = require("http");
require('dotenv').config();
const Port = process.env.PORT
const host = process.env.Host;
const app = require("./app.js");
const server = http.createServer(app);
server.listen(Port, host, ()=>{console.log(`app is runing on ${host}:${Port}`)});
