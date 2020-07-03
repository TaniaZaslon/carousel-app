const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/images", require("./api/images"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;

//api/tagshotlist
//api/tag/:name
//api/images/:tag
//api/image  first 5 random img
//https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=d21d14cb06d3670367fd27708f0b7f5a&per_page=6&page=1&format=json&nojsoncallback=1
