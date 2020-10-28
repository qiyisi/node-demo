const router = require("express").Router();
const verity = require("./verifyToken");

router.get("/", verity, (req, res) => {
  res.json({ posts: { title: "my first post", user: req.user } });
});

module.exports = router;
