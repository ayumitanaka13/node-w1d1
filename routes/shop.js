const express = require("express");
const router = express.Router();
const app = express();

router.get("/", (req, res, next) => {
  res.send("<h1>Hello from the other side</h1>");
});

module.exports = router;
