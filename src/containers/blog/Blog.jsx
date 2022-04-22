import React from 'react';
import Article from '../../components/article/Article';
import blog01 from "../../assets/blog01.png";
import blog02 from "../../assets/blog02.png";
import blog03 from "../../assets/blog03.png";
import blog04 from "../../assets/blog04.png";
import blog05 from "../../assets/blog05.png";
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Our Blog</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Mar 01, 2042" text="GPT-3 and OpenAI is the future. &nbsp; Let us explore how it is!" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Mar 20, 2041" text="FARO: &#13;&#10; A Way to Peace, or The End?" />
        <Article imgUrl={blog03} date="Apr 18, 2041" text="New type of virus confirmed, 1600 cases reported." />
        <Article imgUrl={blog04} date="July 2041" text="SpaceX landed first man and woman on Mars." />
        <Article imgUrl={blog05} date="Jan 09, 2042" text="NFT hit an all-time low as trend moves to qubit codebases." />
      </div>
    </div>
  </div>
);

export default Blog;