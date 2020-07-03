import React, { Component } from "react";
import axios from "axios";

import { UncontrolledCarousel } from "reactstrap";

export default class MyCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/images")
      .then((res) => {
        if (res.data.length > 0) {
          this.setState({
            images: res.data,
          });
        }
      })
      .catch((err) => console.log("Error: " + err));
  }

  imageUrlFormat = (imageObj) => {
    return `https://farm${imageObj.farm}.staticflickr.com/${imageObj.server}/${imageObj.id}_${imageObj.secret}_b.jpg`;
  };

  imageList = () => {
    return this.state.images.map((current, index) => {
      const url = this.imageUrlFormat(current);

      return {
        src: this.imageUrlFormat(current),
        altText: current.title,
        caption: current.title,
        header: current.title,
        key: index,
      };
    });
  };

  render() {
    return <UncontrolledCarousel items={this.imageList()} />;
  }
}
