import React from "react";
import "./style.css";
import meImg from '../../images/me.png';

function MainContact() {
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

          <div class="col-sm-5 contact-right-main">
            <h2>Contact Mike Voynovich</h2>
            <br/>
           
            <p>
              &#8594; via e-mail: <a href = "mailto: mvoyno@gmail.com">mvoyno@gmail.com</a>
            </p>
            <p>
              &#8594; via phone: <a href = "tel: 3176578039">317.657.8039</a>
            </p>
            <p>
              &#8594; view my work experience and GitHub repo to see some of my project examples using the links below:
            </p>
            <br/>
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
          ></div>

          </div>
        </div>
        <div class="row links">
          <div class="col-12 social-media">
          
          </div>
        </div>
        </div>
    </>
  );
}

export default MainContact;
