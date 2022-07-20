import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Group from "./Pages/Groups";
import GroupDetails from "./Pages/Groups/Components/groupDetails";
import ModalCreateGroup from "./Pages/Modal-Create-Group";
import LogIn from "./Pages/logInSection";
function App() {
  return (
    <Router>
      <Routes>createAccount
        <Route exact path="/" element={<LogIn />}></Route>
        <Route path="/createAccount" element={<Group /> }></Route>
        <Route path="/groups" element={<Group /> }></Route>
        <Route path="/group/createGroup" element={<ModalCreateGroup />}></Route>
        <Route path="/group/details/:id" element={<GroupDetails />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
