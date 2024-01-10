const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

// req => middleware => res
// app.use(logger);
app.use([logger, authorize]);
// Multiple miidleware functions can be passed in array.
// Order matters in putting multiple middleware functions in array. If we put [authorize, logger] Then in console we will authorize first and then GET / 2024 and vice versa.
// Here we don't have to manually put logger to each route. We use app.use() function.
// Order matters here
// app.use() should be above all routes

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server is listening at 5000");
});
