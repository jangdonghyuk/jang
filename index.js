const express = require("express");
const app = express();
const port = 3000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://dhj100:Dhj030534@cluster0.0yrpx.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected~"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World! ~ 안녕하세요. 아자카 술식 전개!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
