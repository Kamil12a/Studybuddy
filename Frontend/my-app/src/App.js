import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Group from "./Pages/Groups";
import GroupDetails from "./Pages/Groups/Components/groupDetails";
import CreateAccount from "./Pages/CreateAccount";
import ModalCreateGroup from "./Pages/Groups/Components/Modal-Create-Group/index.js";
import LogIn from "./Pages/logInSection";
import Forum from "./Pages/Forum";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LogIn />}></Route>
        <Route path="/forum" element={<Forum />}></Route>

        <Route path="/createAccount" element={<CreateAccount />}></Route>
        <Route path="/groups" element={<Group />}></Route>
        <Route path="/group/createGroup" element={<ModalCreateGroup />}></Route>
        <Route path="/group/details/:id" element={<GroupDetails />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
