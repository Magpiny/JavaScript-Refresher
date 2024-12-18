const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => res.send("Hello, world from Sam!"));
app.get("/users", (req, res) => res.send("Users route"));
app.get("/posts/:id", (req, res) =>
  res.send(`Posts route ${req.url} ${req.params.id}`)
);

app.listen(PORT, () => console.log(`App listening on ${PORT}`));
