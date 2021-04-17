import React from 'react';
import "./Portfolio.css";
import budgetImg from '../images/budget.png';
import employeeImg from '../images/employee.png';
import workoutImg from '../images/workout.png';
import notesImg from '../images/notes.png';
import movieImg from '../images/movie.png';
import knowvidImg from '../images/knowvid.png';
import ttiImg from '../images/tti.png';
import dinImg from '../images/din.png';
import testImg from '../images/test.png';

function MainPortfolio() { 
  return (
    <>
     <div class="portfolio-background">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-12">
              <header class="content-header" style={{ height: `20%` }}>
            <h2>Portfolio - *click image to view deployed project</h2>
              </header>
            </div>
          </div>
        <div class="row projects">
          <div class="col-sm">
            <h4>Mongo.db Workout Dashboard</h4>
                  <a href="https://github.com/Devoyno/fitness_tracker" target="_blank">Click here to view code</a>
                  <a href="https://fierce-anchorage-88572.herokuapp.com/?id=6054a232da9eb60015cc9675" target="_blank">
                  <img
                    src={workoutImg}
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
                  <a href="https://github.com/Devoyno/employee_tracker" target="_blank">Click here to view code</a>
                  <a href="https://drive.google.com/file/d/1PaFjMm8yPHGcvPj5V4KuXvmAF44v0Pju/view" target="_blank">
                  <img
                    src={employeeImg}
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
                  <a href="https://github.com/Devoyno/budget_tracker" target="_blank">Click here to view code</a>
                  <a href="https://fathomless-peak-55122.herokuapp.com/" target="_blank">
                  <img
                    src={budgetImg}
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
        <div class="row projects">
          <div class="col-sm">
            <h4>Note Taker Application</h4>
                  <a href="https://github.com/Devoyno/fitness_tracker" target="_blank">Click here to view code</a>
                  <a href="https://fierce-anchorage-88572.herokuapp.com/?id=6054a232da9eb60015cc9675" target="_blank">
                  <img
                    src={notesImg}
                    alt="test"
                    class="img-thumbnail"
                    />
                  </a>
                  <ul class="info">
                    <li>This application can be used to write, save, and delete notes</li>
                    <li>This application will use an express backend and save and retrieve note data from a JSON file</li>
                  </ul>
          </div>
          <div class="col-sm">
            <h4>Movie Seat Selector</h4>
                  <a href="https://github.com/Devoyno/movie_seats" target="_blank">Click here to view code</a>
                  <a href="https://devoyno.github.io/movie_seats/" target="_blank">
                  <img
                    src={movieImg}
                    alt="test"
                    class="img-thumbnail"
                    />
                  </a>
                  <ul class="info">
                    <li>Display movie choices and seats in a theater to select from in order to purchase tickets</li>
                    <li>Display UI with movie select, screen, seats, legend & seat info</li>
                    <li>Save seats, movie and price to local storage so that UI is still populated on refresh</li>
                  </ul>
          </div>
          <div class="col-sm">
            <h4>Knowvid-19 (Covid Tracker)</h4>
                  <a href="https://github.com/Devoyno/budget_tracker" target="_blank">Click here to view code</a>
                  <a href="https://fathomless-peak-55122.herokuapp.com/" target="_blank">
                  <img
                    src={knowvidImg}
                    alt="test"
                    class="img-thumbnail"
                    />
                  </a>
                  <ul class="info">
                    <li>Contains the lastest statistics (at the time) on the Covid-19 Pandemic</li>
                    <li>Displays a page where you can see each individual state's confirmed cases, total deaths, total vaccinations and percentage of people who are fully vaccinated. You can also find the nearest testing center.</li>
                    <li>Tools used include: JQuery Handlebars, Node.js, Express, Sequelize, Axios, and more</li>
                  </ul>
          </div>
        </div>
        <div class="row projects">
          <div class="col-sm">
            <h4>Total Tech Indy</h4>
                  <a href="#">Code not viewable, deployed site</a>
                  <a href="https://fierce-anchorage-88572.herokuapp.com/?id=6054a232da9eb60015cc9675" target="_blank">
                  <img
                    src={ttiImg}
                    alt="test"
                    class="img-thumbnail"
                    />
                  </a>
                  <ul class="info">
                    <li>Fully deployed wordpress site for Smart Home company</li>
                    <li>Integrated plugins to allow form submission and other upgraded features</li>
                  </ul>
          </div>
          <div class="col-sm">
            <h4>What's for Dinner</h4>
                  <a href="https://github.com/Devoyno/food_drinks_jokes" target="_blank">Click here to view code</a>
                  <a href="https://devoyno.github.io/food_drinks_jokes/" target="_blank">
                  <img
                    src={dinImg}
                    alt="test"
                    class="img-thumbnail"
                    />
                  </a>
                  <ul class="info">
                    <li>Display movie choices and seats in a theater to select from in order to purchase tickets</li>
                    <li>Display UI with movie select, screen, seats, legend & seat info</li>
                    <li>Save seats, movie and price to local storage so that UI is still populated on refresh</li>
                  </ul>
          </div>
          <div class="col-sm">
            <h4>API test page</h4>
                  <a href="https://github.com/Devoyno/test_page" target="_blank">Click here to view code</a>
                  <a href="https://devoyno.github.io/test_page/" target="_blank">
                  <img
                    src={testImg}
                    alt="test"
                    class="img-thumbnail"
                    />
                  </a>
                  <ul class="info">
                    <li>Fun site I made to test API functionality</li>
                    <li>Search current stock values, generate loan payments, or see a random dog picture</li>
                  </ul>
          </div>
        </div>
      </div>
    </div>
</>
)
}

export default MainPortfolio