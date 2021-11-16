import SignIn from "./components/signIn/SignIn";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PersonalDate from "./components/signUp/personalDate";
function App() {
  return (
    <>
         <Router>
        <Switch>
          <Route exact path="/" component={SignIn}></Route>
          <Route path="/signIn" component={SignIn}></Route>
          <Route path="/signUp"component={PersonalDate}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
