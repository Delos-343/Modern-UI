import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Be the Best',
    text: 'Maximize efficiency and performance, and fulfill your workspace needs with the KnowBase cloud STC databanks.',
  },
  {
    title: 'Family-Friendly',
    text: 'Our household products are CPSC-certified or equivalent, and will serve your daily household needs to the fullest.',
  },
  {
    title: 'Sting Like A Bee',
    text: 'Our home and public security division ensures the safety and well-being of you and co. from a wide variety of threats.',
  },
  {
    title: 'Global Peacekeeping',
    text: 'Chariot Line cracks down on crime like an egg, and brings peace, encouraging local businesses to bloom and grow.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now, and it's Just Getting Started</h1>
      <p>Our Vision and Mission</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
