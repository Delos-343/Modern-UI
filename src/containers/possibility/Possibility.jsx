import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>The Possibilities are Beyond your Imagination</h4>
      <h1 className="gradient__text">Far Zenith VR</h1>
      <p>By sourcing complimentary data from multiple API keys to SpaceX's Starlink and the James Webb Telescope, Far Zenith VR allows you to experience the closer-than-life feeling of exploring the depths of outer space, all from the comforts of your own home.</p>
      <h4>Request Early Access</h4>
    </div>
  </div>
);

export default Possibility;