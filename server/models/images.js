const axios = require("axios");
const API_KEY = "d21d14cb06d3670367fd27708f0b7f5a";

class Images {
  static retriveResentImages(tag, callback) {
    const tags = tag;
    const size = "url_l";
    const perPage = 10;
    const pageMax = 4000 / perPage;
    const pageNum = Math.floor(Math.random() * Math.floor(pageMax));

    axios
      .get(
        //Fetch images
        //tags: cats
        //size: url_l(width 1024)
        //count of page: 1
        //per page: 10
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${tags}&content_type=1&extras=${size}&per_page=${perPage}&page=${pageNum}&format=json&nojsoncallback=1`
      )
      .then((res) => {
        callback(res.data.photos.photo);
      })
      .catch((err) => console.log("Error: " + err));
  }
}

module.exports = Images;
