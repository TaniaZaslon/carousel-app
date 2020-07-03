const axios = require("axios");
const API_KEY = "d21d14cb06d3670367fd27708f0b7f5a";

class Images {
  static retriveResentImages(callback) {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=cats&per_page=6&page=2&format=json&nojsoncallback=1`
      )
      .then((res) => {
        callback(res.data.photos.photo);
      })
      .catch((err) => console.log("Error: " + err));
  }
}

module.exports = Images;
