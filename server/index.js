require("dotenv").config();

const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

const indexRouter = require("./routes");
const { mongoose } = require("mongoose");

try {
  mongoose.connect(process.env.DB_URL).then(() => {
    console.log("DB Connected");
  });
} catch (e) {
  next(e);
}

app.use(express.json());

app.use("/", indexRouter);
app.use((err, req, res, next) => {
  err = err ? err.toString() : "Something went wrong....";
  res.status(500).json({ data: "", msg: err });
});
app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
