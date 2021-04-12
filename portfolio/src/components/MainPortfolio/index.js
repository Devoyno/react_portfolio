import React from 'react';
import "./style.css";

function MainPortfolio() { 
  return (
    <>
     <div class="main">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-12">
              <header class="content-header" style={{ height: `20%` }}>
            <h2>Portfolio - *click image to view deployed project</h2>
              </header>
            </div>
          </div>
        <div class="row">
          <div class="col-sm">
            <h4>Mongo.db Workout Dashboard</h4>
                  <a href="https://github.com/Devoyno/fitness_tracker" alt="">Click here to view code</a>
                  <a href="https://fierce-anchorage-88572.herokuapp.com/?id=6054a232da9eb60015cc9675">
                  <img
                    src={"./Assets/workout.png"}
                    alt="test"
                    class="img-thumbnail"
                    />
                  </a>
                  <ul class="info">
                    <li>Workout Tracker uses MongoDB to store data</li>
                    <li>Can add both cardio and weight exercises</li>
                    <li>View information and duration of previous 7 days</li>
                  </ul>
          </div>
          <div class="col-sm">
            <h4>Node.js Employee Tracker</h4>
                  <a href="https://github.com/Devoyno/employee_tracker">Click here to view code</a>
                  <a href="https://drive.google.com/file/d/1PaFjMm8yPHGcvPj5V4KuXvmAF44v0Pju/view" >
                  <img
                    src="Assets/employee.png"
                    alt="test"
                    class="img-thumbnail"
                    />
                  </a>
                  <ul class="info">
                    <li>Employee Tracker uses Node to create an employee database as well as add or delete roles</li>
                    <li>This tracker uses SQL on the backend to store and access the data</li>
                    <li>View table of employees and roles directly in the terminal</li>
                  </ul>
          </div>
          <div class="col-sm">
            <h4>Mongo.db Budget Tracker</h4>
                  <a href="https://github.com/Devoyno/budget_tracker">Click here to view code</a>
                  <a href="https://fathomless-peak-55122.herokuapp.com/">
                  <img
                    src="Assets/budget.png"
                    alt="test"
                    class="img-thumbnail"
                    />
                  </a>
                  <ul class="info">
                    <li>Budget Tracker uses MongoDB to store data</li>
                    <li>This tracker also utilizes a service worker to allow for data entry while offline and will load entered data upon reconnection</li>
                    <li>View balance information via the graph display</li>
                  </ul>
          </div>
        </div>
      </div>
    </div>
</>
)
}

export default MainPortfolio