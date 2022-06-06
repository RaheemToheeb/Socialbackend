require("./Utils/database");
const router = require("./Router/clubRouter");
const express = require("express");
const port = 1234;
const app = express();

app.use("/api", router);
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome to world of sport");
});

app.listen(port, () => {
  console.log(`I am active on ${port}`);
});
