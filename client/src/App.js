import React, { Component } from "react";
import MyCarousel from "./components/carousel.component";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.btnHandler = this.btnHandler.bind(this);
    this.state = {
      tags: ["Bridge", "Mountain", "Wood", "Sea"],
      currentTag: "Sea",
    };
  }
  btnHandler = (e) => {
    this.setState({ currentTag: e.target.value });
  };

  getButtons = () => {
    return this.state.tags.map((item, index) => {
      return (
        <button
          type="button"
          onClick={this.btnHandler}
          className="btn btn-info"
          data-toggle="button"
          key={index}
          value={item}
        >
          {item}
        </button>
      );
    });
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            TZaslon
          </a>
          <ul className="nav justify-content-center w-100">
            <li className="nav-item">
              <h3>
                <span className="navbar-text">This is a simple Carousel</span>
              </h3>
            </li>
          </ul>
        </nav>
        <div className="container mt-4">
          <p className="lead">Flickr API is used for retrive pictures.</p>
          <p>Choose an any button below to change a carousel subject.</p>
          <div className="btn-group" role="group" aria-label="Basic example">
            {this.getButtons()}
          </div>
        </div>

        <div className="container mt-4">
          <div>{this.state.currentTag}</div>

          <MyCarousel tag={this.state.currentTag} />
        </div>
      </div>
    );
  }
}
