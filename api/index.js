const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/call-service", (req, res) => {
  fetch(process.env.URL_SERVICE || "http://localhost:3001")
    .then((response) => response.json())
    .then((data) => res.send(data))
    .catch((error) => res.send({ message: "Error calling service" + error }));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
