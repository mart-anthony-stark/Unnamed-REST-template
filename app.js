const unnamed = require("unnamed-js");
const dotenv = require("dotenv");
const { connectDB } = require("./database");
dotenv.config({});

const server = unnamed({
  port: process.env.PORT || 8080,
  init: () => {
    connectDB(process.env.MONGODB_URI);
  },
});

const { GET, POST, PUT, PATCH, DELETE } = server;

server.router(require("./routers"));

GET("/", (request, response) => {
  response.send("Hello");
});
