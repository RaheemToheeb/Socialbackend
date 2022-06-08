const mongoose = require("mongoose");
const url =
  "mongodb+srv://codelab2021:Moriam_14@cluster0.o33zd.mongodb.net/MySocialApp?";

mongoose.connect(url).then((req, res) => {
  try {
    console.log("Data base connected");
  } catch (error) {
    console.log("Cant connet");
  }
});
