import React from "react";
import './style_homepage.css'; 

const Homepage = () => {

  return (

    <div>
      <a href="https://github.com/tawhidmonowar/polyglot_ai" className="github-icon">
        <img src="https://img.icons8.com/ios/50/000000/github.png" alt="GitHub" />
      </a>
      <h1>Polyglot AI</h1>
      <p>Experience the future of programming with AI-powered tools</p>
      <div className="container">
        <a href="http://localhost:3000/codetranslator">
          <div className="box"><h3>AI Code Translator</h3>
          <p>translate code instantly in multiple programming languages.</p></div>
        </a>
        <a href="http://www.example.com">
          <div className="box">Coming soon...</div>
        </a>
        <a href="http://www.example.com">
          <div className="box">Coming soon...</div>
        </a>
        <a href="http://www.example.com">
          <div className="box">Coming soon...</div>
        </a>
      </div>
    </div>

  );

}

export default Homepage;