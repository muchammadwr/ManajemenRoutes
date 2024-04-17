const express = require("express");
const router = express.Router();

// define routes
router.get("/", (req, res) => {
  const { user = "No-name", token = "" } = req.cookies;
  res.send(`Hello ${user} with token ${token}`);
});

router.get("/create", (req, res) => {
  res.send("Theater create");
});

router.post("/:id", (req, res) => {
  res.send("Theater store");
});

router.get("/:id", (req, res) => {
  res.send("Theater show");
});

router.put("/:id", (req, res) => {
  res.send("Theater update");
});

router.delete("/:id", (req, res) => {
  res.send("Theater delete");
});

module.exports = router;
