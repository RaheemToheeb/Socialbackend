const mongoose = require("mongoose");

const postModel = mongoose.Schema(
  {
    message: {
      type: String,
    },

    avatar: {
      type: String,
    },
    avatarID: {
      type: String,
    },
    like: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "likes",
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("posts", postModel);
