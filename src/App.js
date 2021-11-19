import SignIn from "./components/signIn/SignIn";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PersonalDate from "./components/signUp/personalDate";
import UniversitySection from "./components/signUp/universitySection";
import AboutYouForm from "./components/signUp/AboutYourForm";
import Forum from "./components/forum/Forum";
function App() {
  return (
    <>
         <Router>
        <Switch>
          <Route exact path="/" component={SignIn}></Route>
          <Route path="/signIn" component={SignIn}></Route>
          <Route path="/signUp"component={PersonalDate}></Route>
          <Route path="/universitySection"component={UniversitySection}></Route>
          <Route path="/aboutYouForm"component={AboutYouForm}></Route>
          <Route path="/forum"component={Forum}></Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;
