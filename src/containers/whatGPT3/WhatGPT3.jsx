import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What We Do" text="HanDoko Automata was founded in 2021, by Delos Angelo, with humble beginnings as an online education platform. The company was renowned for its popular lines of personal utility databanks and digital mentoring modules, but it was overshadowed by then-industry giants such as Hexadec and Re:Think. HDA was acquired by the logistics and transportation conglomerate, Handoko Semesta Madani, in 2033 and made its greatest success with the introduction of green robots and environmental cleanup and detoxification programs. By the end of the decade, the company expanded its focus from green robotics to military contracts with its own defense branch — Chariot Line — for peacekeeping and public security." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">A Safe Future in A Better World</h1>
      <p>Explore Our Blog</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Herr Heim" text="The Perfect Home Companion, Just For You! Get your housework done much faster and keep your humble abode tip-top, sparkling clean." />
      <Feature title="KnowBase" text="Access the entire world's databanks in real-time to aid you in your daily workspace needs. Blueprints, Graphs, Code Repo? We Got It All!" />
      <Feature title="Y3S" text="Feeling A Bit On Edge? Y3S is a personal travel bot that will report dangers at your own discretion and protect you with a 1400V zap!" />
    </div>
  </div>
);

export default WhatGPT3;