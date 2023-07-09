import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import detailsRoutes from "./routes/detailsRoute.js";
import performanceRoute from "./routes/performanceRoute.js";

const app = express();

//configure dotenv
dotenv.config();

//connect to db
connectDB();

app.use(express.json());
app.use("/api/v1/student", detailsRoutes);
app.get("/api/v1/perform", performanceRoute);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
