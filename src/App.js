import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import ToDoProvider from "./components/Context/Context";
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";

function App() {
  return (
    <ToDoProvider>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </ToDoProvider>
  );
}

export default App;
