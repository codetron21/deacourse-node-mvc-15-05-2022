const express = require("express");
const bodyParser = require("body-parser");
const heroController = require("./controller/hero.controller");
const historyController = require("./controller/history.controller");

const server = express();
const port = 3000;

server.set("view engine", "ejs");
server.set("views", "view");

server.use(express.static(__dirname + "/public"));

server.use(bodyParser.urlencoded({ extended: false }));

server.use("/heroes", heroController);

server.use("/history", historyController);

server.use("/", (_, response) => {
  response.redirect("/heroes");
});

server.listen(port, () => {
  console.log(`server running on ${port}`);
});
