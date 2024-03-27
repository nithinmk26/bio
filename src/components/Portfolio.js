import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.css'; 
import { Carousel } from 'react-bootstrap';

export default class Porfolio extends Component {
  render() {
    let imageUrls  = this.props.resumeData.imageUrls;
    return (
      <section id="portfolio">
          {imageUrls.map((imageUrl, index) => (
              <div className="text-center">
                <img
                  className="d-inline-block "
                  src={imageUrl}
                  alt={`Slide ${index + 1}`}
                  // style={imageStyle}
                />
              </div>
          ))}
  </section>
        );
  }
}