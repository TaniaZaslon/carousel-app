const request = require("request-promise");

const API_KEY = "d21d14cb06d3670367fd27708f0b7f5a";

class Tags {
  static retriveHotsTags(callback) {
    request({
      url: `https://www.flickr.com/services/rest/?method=flickr.tags.getHotList&api_key=${API_KEY}&count=5&format=json&nojsoncallback=1`,
      json: true,
    })
      .then((res) => {
        callback(res);
      })
      .catch((err) => {
        console.log("Error: " + err);
      });
  }
}

module.exports = Tags;
