const unnamed = require("unnamed-js");

const server = unnamed(
  {
    port: process.env.PORT || 8080,
  },
  { log: true }
);

const { GET, POST, PUT, PATCH, DELETE } = server;

server.combineRouters(require("./routers"));

GET("/", (request, response) => {
  response.send("Hello");
});
