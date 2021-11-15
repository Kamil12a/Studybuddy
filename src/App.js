import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signUp/SignUp";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AccountDate from "./components/signUp/accountDate";
import PersonalDate from "./components/signUp/personalDate";
function App() {
  return (
    <>
         <Router>
        <Switch>
          <Route exact path="/" component={SignIn}></Route>
          <Route path="/signIn" component={SignIn}></Route>
          <Route path="/signUp/" component={AccountDate}></Route>
          <Route path="/personalDate" component={PersonalDate}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
