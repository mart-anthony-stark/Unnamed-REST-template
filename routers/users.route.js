module.exports = ({ GET, POST, PUT, PATCH, DELETE }) => {
  GET("/", (request, response) => {
    response.send("User");
  });
};
