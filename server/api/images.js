const express = require("express");
const Images = require("../models/images");

const router = express.Router();

router.get("/", (req, res) => {
  Images.retriveResentImages((err, images) => {
    if (err) return res.json(err);

    return res.json(images);
  });
});

module.exports = router;
