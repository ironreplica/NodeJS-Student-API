const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const awesomeFunction = (req, res) => {
  res.send("Hello World!");
};

const tooeleTech = (req, res) => {
  res.send("Tooele Tech is Awesome!");
};

const additionalRoute = (req,res) => {
  res.send("additional route");
}

// Get single setudent by id
const getSingleStudent = async (req, res) => {
  console.log("get single student by id");
  try {
    const userId = new ObjectId(req.params.id); 
    const result = await mongodb
      .getDb()
      .db()
      .collection("students")
      .findOne({_id: userId});

    if (result) {
      console.log(`Getting student: ${result}`);
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Not found" });
    }
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
}

// Get all students
const getAllStudents = async (req, res) => {
  console.log("get all students");
  try {
    const result = await mongodb.getDb().db().collection("students").find();
    result.toArray().then((lists) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists);
    });
  } catch (error) {
    res.status(500).json(error);
  }
};



// Create contact
const createStudent = async (req,res) => {
  console.log("create students");
  try {
    const student = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      age: req.body.age,
      currentCollege: req.body.currentCollege,
    };

    const response = await mongodb
      .getDb()
      .db()
      .collection("students")
      .insertOne(student);
    if(response.acknowledged){
      res.status(201).json(response);
    } else {
      res.status(500)
        .json(
          response.error || "Some error occurred while creating a student."
        )
    }
  } catch (error) {
    res.status(500).json(error);
  }
}
module.exports = { awesomeFunction, tooeleTech, getAllStudents, additionalRoute, getSingleStudent, createStudent };
