const express = require("express");
const app = express();
const port = 3000;

// localhost:3000/ delivers the string "hello world"
app.get("/", (req, res) => res.send("Hello World!"));
app.get("/shopping_list", (req, res) =>
  res.send(["milk", "cereals", "spoon", "bowl"])
);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
