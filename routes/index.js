const myController = require("../controllers");
const routes = require("express").Router();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");

routes.get("/", myController.awesomeFunction);

routes.get("/ttech", myController.tooeleTech);

routes.use("/students", require("./students"));
routes.use("/api-docs", swaggerUi.serve);
routes.use("/api-docs", swaggerUi.setup(swaggerDocument));


module.exports = routes;
