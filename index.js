const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = process.env.PORT || 5000;
const courses = require("./data/course.json");
app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/course", (req, res) => {
  res.send(courses);
});

app.listen(port, () => {
  console.log("Example app listening on port ", port);
});
