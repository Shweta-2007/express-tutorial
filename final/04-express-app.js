const express = require("express");
const path = require("path");

const app = express();

// setup static middleware
app.use(express.static("./public"));

app.get("/", (req, res) => {
  //    Here we can not write like this
  // res.sendFile("./navbar-app/index.html")  => There is a slight problem with this, The path inside sendFile is not meant to be a relative path, rather if it is relative path then we need to tell express that where it is relative from. Because by default It is going to look for an absoluth (the path from the root file of our computer)
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));

  // OR we can also write like this

  // res.sendFile("./navbar-app/index.html", { root: __dirname });
});

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000....");
});
