import { Routes, Route } from "react-router-dom";
import UsersList from "./features/users/UsersList";
import UserDetails from "./features/users/UserDetails";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={UsersList} />
        <Route path="/:userId" Component={UserDetails} />
      </Routes>
    </>
  );
}

export default App;
