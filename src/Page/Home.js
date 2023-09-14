import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom'; // Import Link
import './Home.css';
import downloadImage from '../Image/download.jpg';






function Carousel_1() {
  

  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            src={downloadImage}
            alt="First slide"
            className="d-block w-100 max-height-image"
          />
          <Carousel.Caption>
            <h3>TITLE</h3>
            {/* Replace the anchor tag with Link */}
            <Link to="/Productlist" className="btn btn-primary btn-lg rounded-pill my-3 animated-btn">Buy Product</Link>
           
          </Carousel.Caption>
        </Carousel.Item>
        {/* Add more Carousel.Items as needed */}
      </Carousel>
    </div>
  );
}

export default Carousel_1;
