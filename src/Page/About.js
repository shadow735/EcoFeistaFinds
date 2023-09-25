import React from 'react';
import './about.css';
import eco from '../Image/eco.jpg';
import eco2 from '../Image/eco2.jpg';
import eco3 from '../Image/eco3.jpg';
import eco4 from '../Image/eco4.jpg';
import eco5 from '../Image/eco5.jpg';
import eco6 from '../Image/eco6.jpg';
import eco7 from '../Image/eco7.jpg';

const About = () => {
  return (
    <div class="responsive-container-block bigContainer">
    <div class="responsive-container-block Container">
      <div class="responsive-container-block leftSide">
        <p class="text-blk heading">
          About us 
        </p>
        <p class="text-blk subHeading">
        Welcome to EcoFiestaFinds, your trusted source for sustainable living solutions.
        We are a passionate team of eco-conscious individuals dedicated to making the world a greener, healthier place. 
        Our journey began with a simple belief: that every small action can create a big impact.
        </p>
      </div>
      <div class="responsive-container-block rightSide">
        <img class="number1img" src={eco}></img>
        <img class="number2img" src={eco2}></img>
        <img class="number3img" src={eco3}></img>
        <img class="number5img" src={eco4}></img>
        <img class="number4vid" src={eco7}></img> 
        <img class="number7img" src={eco5}></img>
        <img class="number6img" src={eco6}></img>
      </div>
    </div>
  </div>
  );
};

export default About;
