import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import Resume from "./pages/resume";


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div>
      <Switch>
        <Route exact path={["/", "/about"]}>
          <About />
        </Route>
        <Route exact path={"/contact"}>
          <Contact />
        </Route>
        <Route exact path={"/portfolio"}>
          <Portfolio />
        </Route>
        <Route exact path={"/resume"}>
          <Resume />
        </Route>
      </Switch>
    </div>
  </Router>

  )
}
export default App;
