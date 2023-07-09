import express from "express";
import { addDetails, getDetails } from "../controllers/detailsController.js";

const router = express.Router();

//routing

// Register ---> POST
router.post("/createDetails", addDetails);
router.get("/findAllStudents", getDetails);

export default router;
