const http = require("http");
const { readFileSync } = require("fs");

// Get all files
const homePage = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeLogic = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  const url = req.url;
  // home page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();

    // style page
  } else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyles);
    res.end();

    // Javascript page
  } else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/js" });
    res.write(homeLogic);
    res.end();
  } else {
    res.writeHead(400, { "content-type": "text/html" });
    res.write(`<h1>Page not found</h1>`);
    res.end();
  }
});

server.listen(5000, () => {
  console.log("Server is running on port 5000...");
});
