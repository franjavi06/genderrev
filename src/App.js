import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Vote from "./pages/Vote";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/genderrev" element={<Home />} />
        <Route path="/genderrev/vote" element={<Vote />} />
      </Routes>
    </div>
  );
}

export default App;
