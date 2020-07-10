import React, { Component } from "react";
import axios from "axios";
import "./carousel.style.css";

export default class MyCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/images/${this.props.tag}`)
      .then((res) => {
        if (res.data.length > 0) {
          this.setState({
            images: res.data,
          });
        }
      })
      .catch((err) => console.log("Error: " + err));
  }

  componentDidUpdate(prevProps) {
    if (this.props.tag !== prevProps.tag) {
      axios
        .get(`http://localhost:5000/api/images/${this.props.tag}`)
        .then((res) => {
          if (res.data.length > 0) {
            this.setState({
              images: res.data,
            });
          }
        })
        .catch((err) => console.log("Error: " + err));
    }
  }

  imageUrlFormat = (imageObj) => {
    return `https://farm${imageObj.farm}.staticflickr.com/${imageObj.server}/${imageObj.id}_${imageObj.secret}.jpg`;
  };

  imageList = () => {
    return this.state.images.map((current, index) => {
      const url = this.imageUrlFormat(current);

      return (
        <div
          className={"carousel-item" + (index === 0 ? " active" : "")}
          key={index}
        >
          <img src={url} className="d-block w-100" alt={current.title} />
        </div>
      );
    });
  };

  getIndecatorList = () => {
    return this.state.images.map((current, index) => {
      return (
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to={index}
          className={index === 0 ? "active" : ""}
          key={index}
        ></li>
      );
    });
  };

  render() {
    console.log("render" + this.props.tag);
    return (
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">{this.getIndecatorList()}</ol>
        <div className="carousel-inner">{this.imageList()}</div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}
