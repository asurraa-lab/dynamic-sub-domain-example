import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Test1 from "./pages/test1";

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Test1 />} />
        <Route path="/about" element={<div>about</div>} />
      </Routes>
    </div>
  );
}

export default App;
