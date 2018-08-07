const express = require("express");

const router = express.Router();
// @route GET request to api/posts/test
// @description Tests post route
// @access public
router.get("/test", (req, res) => {
  res.json({ msg: "posts WORKS" });
});

module.exports = router;
