require("../server/Utils/db");
const express = require("express");
const port = 1999;

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  console.log("Welcome");
});

app.listen(port, () => {
  console.log(`I am active on port ${port}`);
});
