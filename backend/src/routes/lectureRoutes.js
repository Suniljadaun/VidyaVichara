const express = require("express");
const { createClass, joinClass } = require("../controllers/lectureController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, createClass);
router.post("/join", protect, joinClass);

module.exports = router;
