const express = require("express");

const router = express.Router();
// @route GET request to api/users/test
// @description Tests users route
// @access public
router.get("/test", (req, res) => {
  res.json({ msg: "users WORKS" });
});

module.exports = router;
