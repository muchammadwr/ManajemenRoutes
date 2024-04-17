const express = require("express");
const router = express.Router();

// define routes
router.use((req, res, next) => {
  if (req.query.isAdmin) {
    next();
  }
  res.send("You're not admin");
});

router.get("/", (req, res) => {
  res.cookie("user", "namaUser");
  res.cookie("token", "1234");
  res.send("administrator");
});

module.exports = router;
