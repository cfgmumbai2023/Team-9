import studentDetails from "../models/studentDetails.js";

export const addDetails = async (req, res) => {
  try {
    const {
      name,
      age,
      gender,
      disability,
      severity,
      phone,
      address,
      schoolname,
      program,
      level,
    } = req.body;

    //checking existing user

    const studName = await studentDetails.findOne({ name: name });
    if (studName) {
      return res.status(500).send({
        success: false,
        message: "Student already registered.",
      });
    }

    const newStudent = await studentDetails.create({
      name,
      age,
      gender,
      disability,
      severity,
      phone,
      address,
      schoolname,
      program,
      level,
    });
    return res.status(201).send({
      success: true,
      message: "successfully registered",
      newStudent,
    });
  } catch (e) {
    res.status(500).send({
      message: "Error occured",
      error: e,
    });
  }
};

//get all students data

export const getDetails = async (req, res) => {
  try {
    const data = await studentDetails.find({});
    res.send({
      success: true,
      message: "Data",
      data,
    });
  } catch (e) {
    console.log(e);
    res.send(e);
  }
};
