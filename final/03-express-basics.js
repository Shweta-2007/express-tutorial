const express = require("express");
const app = express();

// Register view engine
// Now It knows that it is going to use the EJS view engine to create our template
// We need a place to create our different EJS views, now automatically express and EJS are going to look in the views folder for that. So it is the default value where it is going to look.

app.set("view engine", "ejs");

// Now if you want to keep that files in another folder than views then you will have to mention that.
// app.set("views", "myViews") => Now express will look for views in myViews.

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});

app.all("*", (req, res) => {
  res.status(404).render("404");
});

app.listen(5000, () => {
  console.log("Server is running at 5000");
});
// app.get
// app.post
// app.put
// app.delete
// app.use
// app.all
// app.listen
