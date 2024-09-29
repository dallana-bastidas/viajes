const express = require("express");

const app = express();

app.get("/hello/:username", (req, res) => {
  console.log(req.params.username);
  console.log(typeof req.params.username);
  res.send(`hello ${req.params.username.toUpperCase()}`);
});

app.listen(3000);
console.log(`server on port ${3000}`);
