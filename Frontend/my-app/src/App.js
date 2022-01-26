import SignIn from "./components/signIn/SignIn";
import { BrowserRouter as Router, Routes, Route, useSearchParams } from "react-router-dom";
import PersonalDate from "./components/signUp/personalDate";
import UniversitySection from "./components/signUp/universitySection";
import AboutYouForm from "./components/signUp/AboutYourForm";
import Forum from "./components/forum/Forum";
import { YourGroups } from "./components/yourGroups/YourGroups";
import SearchingGroups from "./components/searchingGroups/SearchingGroups";
import { ToolBar } from "../src/components/global/ToolBar"
import { Navbar } from "./components/NavBar";
import { ThemeContext } from "./context/UserContext"
import {useState} from "react"
function App() {
  const [userDataAccount, setUserDataAccount] = useState({username:""})
  return (
    
    <ThemeContext.Provider value={{userDataAccount,setUserDataAccount} }>
      <Router>
        <Navbar />
        < Routes>
          <Route exact path="/" element={<SignIn />}></Route>
          <Route path="/signIn" element={<SignIn />}></Route>
          <Route path="/signUp" element={<PersonalDate />}></Route>
          <Route
            path="/universitySection"
            element={<UniversitySection />}
          ></Route>
          <Route path="/aboutYouForm" element={<AboutYouForm />}></Route>
          <Route path="/forum" element={<Forum />}></Route>
          <Route path="/searchinggroups" element={<SearchingGroups />}></Route>
          <Route path="/yourGroups" element={<YourGroups />}></Route>
          <Route path="/nativeMenu" element={<ToolBar />}></Route>
        </Routes>
      </Router>
      </ThemeContext.Provider>
  );
}

export default App;
