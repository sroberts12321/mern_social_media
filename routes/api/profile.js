const express = require("express");

const router = express.Router();
// @route GET request to api/profile/test
// @description Tests profile route
// @access public
router.get("/test", (req, res) => {
  res.json({ msg: "profile WORKS" });
});

module.exports = router;
