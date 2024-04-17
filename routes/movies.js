const express = require("express");
const router = express.Router();

// define routes
router.get("/", (req, res) => {
  const { user = "No-name", token="" } = req.cookies;
  res.send(`Hello ${user} with token ${token}`);
});

router.get("/create", (req, res) => {
  res.send("Movies create");
});

router.post("/:id", (req, res) => {
  res.send("Movies store");
});

router.get("/:id", (req, res) => {
  res.send("Movies show");
});

router.put("/:id", (req, res) => {
  res.send("Movies update");
});

router.delete("/:id", (req, res) => {
  res.send("Movies delete");
});

module.exports = router;
