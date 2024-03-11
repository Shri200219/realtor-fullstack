const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("../api/routes/user.route");
const authRouter = require("../api/routes/auth.route");
dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());

app.listen(3002, () => {
  console.log("Server running on port 3000!!");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
