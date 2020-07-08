import React from "react";
import MyCarousel from "./components/carousel.component";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

function App() {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          TZaslon
        </a>
        <div id="navbarNav">
          <ul className="navbar-nav nav-pills mr-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Cats
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Summer
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Ice Cream
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* <div class="jumbotron">
        <h1 class="display-4">This is a simple Carousel</h1>
        <p class="lead">Flickr API is used for retrive pictures.</p>
        <hr class="my-4" />
        <p>Choose any menu button to change a carousel subject.</p>
      </div> */}
      <div className="container mt-4">
        <MyCarousel />
      </div>
    </div>
  );
}

export default App;
