import React from 'react';
import "./Resume.css";
import resume1Img from '../images/resume1.png';
import resume2Img from '../images/resume2.png';
import michael_voynovich_full_stackPDF from '../images/michael_voynovich_full_stack.pdf';

function MainResume() { 
  return (
    <>
      <div class="main">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-12">
              <header class="content-header">
            <h2>Full Stack Developer</h2>
            <h2>Specializing in UI/UX design</h2>
              </header>
            </div>
          </div>
          <div class="row resume">
            <div class="col-sm">
              <img
                src={resume1Img}
                alt="test"
                class="img-thumbnail"
                />
            </div>
            <div class="col-sm">
               <img src={resume2Img} 
                    alt="test" 
                    class="img-thumbnail" />
            </div>
          </div>
          <a href={michael_voynovich_full_stackPDF}download="voynovich-resume" class="btn btn-secondary btn-sm mt-2 resume-btn">Download A Copy</a>
            </div>
    </div>  
</>
)
}

export default MainResume