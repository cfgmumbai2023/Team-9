import studentPerformance from "../models/studentPerformance.js";

//create
export const evaluateParameters = async (req, res) => {
  try {
    const {
      fraction,
      addSubt,
      twoWords,
      vocab,
      tradModernGame,
      mapTopo,
      lemon,
      stamp,
      recog,
    } = req.body;
    const newStudent = await studentPerformance.create({
      fraction,
      addSubt,
      twoWords,
      vocab,
      tradModernGame,
      mapTopo,
      lemon,
      stamp,
      recog,
    });
    return res.status(201).send({
      success: true,
      message: "Parameters added successfully",
      newStudent,
    });
  } catch (e) {
    console.log(error);
    res.send({
      success: false,
      message: "Error occured",
    });
  }
};

//get

export const getAll = async (req, res) => {
  try {
    const data = await studentPerformance.find({});
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
