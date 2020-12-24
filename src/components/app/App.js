import NavBar from "../navBar/navBar";
import Register from '../register/register';
import Login from '../login/login'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      
      <div className="App">
        <NavBar/>
        <Route exact path="/auth/register" component={Register}></Route>
        <Route exact path="/auth/login" component={Login}></Route>
        {/* <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route> */}
      </div>
    </Router>
  );
}

export default App;
