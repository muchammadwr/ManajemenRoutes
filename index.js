const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

// define port
const port = 3000;

// define middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("secret-key"));

// define routes
app.get("/signingcookie", (req, res) => {
  res.cookie("paket", "ransel", { signed: true });
  res.send("signed cookie");
});

app.get("/verifycookie", (req, res) => {
  const cookie = req.signedCookies;
  res.send(cookie);
});

app.use("/admin", require("./routes/admin"));
app.use("/theater", require("./routes/theater"));
app.use("/movies", require("./routes/movies"));

// start server
app.listen(port, () => {
  console.log(`running in port http://localhost:${port}`);
});
