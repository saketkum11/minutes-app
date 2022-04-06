import "./App.css";
import logo from "./logo.png";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/labels">Labels</Route>
        <Route path="/archieve">Archieve</Route>
        <Route path="/Trash">Trash</Route>
        <Route path="/profile">Profile</Route>
      </Routes>
    </div>
  );
}

export default App;
