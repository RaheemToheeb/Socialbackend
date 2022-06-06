const mongoose = require("mongoose");
const url = "mongodb://localhost/Myapp";

mongoose.connect(url).then((req, res) => {
  try {
    console.log("Data base connected");
  } catch (error) {
    console.log("Cant connet");
  }
});
