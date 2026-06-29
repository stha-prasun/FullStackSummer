import express from "express";
import userRoute from "./routes/userRoutes.js"

const port = 3000;

const app = express();

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.use("/api/v1", userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});