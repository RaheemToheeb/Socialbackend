require("../server/Utils/db");
const express = require("express");
// const port = 1999;

const port = process.env.PORT || 3000;
1999;
const Router = require("./Router/Router");

const app = express();
app.use(express.json());
app.use("/api", Router);
app.get("/", (req, res) => {
  console.log("Welcome");
});

app.listen(port, () => {
  console.log(`I am active on port ${port}`);
});
