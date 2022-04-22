import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text"><small> HanDoko Automata </small></h1>
      <p>
        <small>
        Founded in 2021 as a startup for online education, its acquisition by Handoko Semesta Madani and the appointment of its former CTO to office has lead to a dramatic increase in federal support and net-positive profit gains, paving the way for HanDoko Automata to expand to the private security and military sectors.
        </small>
      </p>
      
      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button"><small> Get Started </small></button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>2001 people visited this site in the last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;