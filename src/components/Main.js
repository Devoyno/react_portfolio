import React from 'react';
import "./Main.css";
import meImg from '../images/me.png';

function Main() { 
  return (
    <>
    <div class="main">
      <div class="container">
        <div class="row">
          <div class="col-sm-5 left-main">
            <div class="photo">
              <img class="mike-computer" src={meImg} alt=""/>
            </div>
          </div>

          <div class="col-sm-5 right-main">
            <h2>About Me</h2>
            <p>
              Working to turn my passion for technology into a career as a full
              stack web developer.
            </p>
            <p class="bold">
              Currently Specializing in UI/UX & Javascript and familiar with
              building full stack applications.
            </p>
            <p>
              Leveraging Butler University's bootcamp I am gaining the skills
              and knowledge needed to become an expert in my field!
            </p>
            <p class="bold">
              Skills & Languages learned include: HTML5, CSS3, Javascript,
              JQuery, Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express,
              Handelbars.js & ReactJS.
            </p>
            <p>
              Please use the following links to find out more regarding my
              career history and a portfolio of projects completed via GitHub
            </p>
            <a
              class="btn btn-lg btn-outline-light"
              href="https://www.linkedin.com/in/mike-voynovich-77b7278/"
              target="-blank"
              role="button"
              >LinkedIn</a
           >
            <a
              class="btn btn-lg btn-outline-light"
              href="https://github.com/Devoyno"
              target="-blank"
              role="button"
              >GitHub</a
            >
          </div>
        </div>
        <div class="row links">
          <div class="col-12 social-media"></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Main