import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Group from "./Pages/Groups";
import GroupDetails from "./Pages/Groups/Components/groupDetails";
import Navigation from "./Navigation";
import ModalCreateGroup from "./Pages/Modal-Create-Group";
function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route exact path="/" element={<Group />}></Route>
        <Route exact path="/group/createGroup" element={<ModalCreateGroup />}></Route>
        <Route path="/group/details/:id" element={<GroupDetails />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
