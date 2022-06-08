const mongoose = require("mongoose");

const userModel = mongoose.Schema(
  {
    fullName: {
      type: String,
    },
    userName: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    avatar: {
      type: String,
    },
    avatarID: {
      type: String,
    },
    verifiedToken: {
      type: String,
    },
    isVerified: {
      type: Boolean,
    },
    post: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "posts",
      },
    ],
    follower: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
    ],
    saved: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "saves",
      },
    ],
    story: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "stories",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userModel);
