import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Favorite from "./components/Favorite/Favorite";
import Cars from "./components/Cars/Cars";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Cars />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
