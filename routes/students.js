const express = require("express");
const router = express.Router();

const StudentController = require("../controllers/index");

router.get("/students/:id", StudentController.getSingleStudent);

router.get("/students", StudentController.getAllStudents);


router.post("/", StudentController.createStudent);

module.exports = router;