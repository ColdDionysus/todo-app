require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const indexRouter = require("./routes");

const port = +process.env.PORT || 3000;
const DB_URL = process.env.DB_URL || "mongodb://127.0.0.1:27017/test";

mongoose.connect(DB_URL).then(() => {
  console.log("DATABASE CONNECTED!!!");
});
app.use(cors());
app.use(express.json());

app.use("/", indexRouter);

app.use((err, req, res, next) => {
  err = err ? err.toString() : "something went wrong..";
  res.status(500).json({ data: "", msg: err });
});

app.listen(port, () => {
  console.log(`app running on port: ${port}`);
});
