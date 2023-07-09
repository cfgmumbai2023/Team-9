import express from "express";
import {
  evaluateParameters,
  getAll,
} from "../controllers/performanceController.js";

const router = express.Router();

//routing

// evaluate ---> POST
router.post("/evaluate", evaluateParameters);
router.get("/findAll", getAll);

export default router;
