import React from 'react';
import "./style.css";

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
                src="Assets/resume1.png"
                alt="test"
                class="img-thumbnail"
                />
            </div>
            <div class="col-sm">
               <img src="Assets/resume2.png" 
                    alt="test" 
                    class="img-thumbnail" />
            </div>
          </div>
          <a href="assets/michael_voynovich_full_stack.pdf.pdf" download="voynovich-resume" class="btn btn-secondary btn-sm mt-2 resume-btn">Download A Copy</a>
            </div>
    </div>  
</>
)
}

export default MainResume