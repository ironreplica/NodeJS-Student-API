const myController = require("../controllers");
const routes = require("express").Router();

routes.get("/", myController.awesomeFunction);

routes.get("/ttech", myController.tooeleTech);

routes.get("/test", myController.additionalRoute);

routes.get("/students", myController.getAllStudents);

module.exports = routes;

// check if stuff works
