const express = require("express");
const app = express();
const { products } = require("./data");

// app.get("/", (req, res) => {
//   res.json(products);
// });

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1> <a href='/api/products'>Products</a>");
});

app.get("/api/products", (req, res) => {
  // Being selective at what I am sending back
  const newProducts = products.map((product) => {
    const { id, image, name } = product;
    return { id, image, name };
  });
  res.json(newProducts);
});

// Routes Parameters are like placeholders where user provides a data and then using requests and params, we can access that data and then setup some kind of logic

app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (!singleProduct) {
    return res.status(404).send("Product Does Not Exist");
  }

  res.json(singleProduct);
});

app.get("/api/v1/query", (req, res) => {
  // console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts.length < 1) {
    return res.status(200).send("no products matched your search :(");
  }

  return res.status(200).json(sortedProducts);
});

// We can have only one response per request. In order to avoid that always go with return, so always when you are setting up the condition, make sure that you go with return.

app.listen(5000, () => {
  console.log("server is listening on 5000...");
});
