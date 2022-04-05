import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, useLocation, Link, useParams } from "react-router-dom";
import Test1 from "./pages/test1";

function App() {
  const location = useLocation();
  const param = useParams();
  console.log("log", location, param);
  return (
    <div className="App">
      <Link to={"/"} style={{ padding: 10 }}>
        <a>home</a>
      </Link>
      <Link to={"/about"}>
        <a>about</a>
      </Link>
      <Routes>
        <Route path="/" element={<Test1 />} />
        <Route path="/about" element={<div>about</div>} />
      </Routes>
    </div>
  );
}

export default App;
