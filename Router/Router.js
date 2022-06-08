const express = require("express");
const {
  getUser,
  getUsers,
  updateUser,
  deleteUser,
  createUser,
  verifiedUser,
} = require("../controller/userController");
const upload = require("../utils/multer");
const router = express.Router();

router.route("/").get(getUsers);
router.route("/:id").get(getUser).patch(upload, updateUser).delete(deleteUser);

router.route("/register").post(upload, createUser);
router.route("/token/:id/:token").get(verifiedUser);

module.exports = router;
