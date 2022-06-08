const mongoose = require("mongoose");

const storyModel = mongoose.Schema(
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
    comment: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "comments",
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("stories", storyModel);
