const express = require("express");
const Images = require("../models/images");

const router = express.Router();

router.get("/:tag", (req, res) => {
  let tag = req.params.tag;
  Images.retriveResentImages(tag, (err, images) => {
    if (err) return res.json(err);

    return res.json(images);
  });
});

module.exports = router;
