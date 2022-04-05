import logo from "./logo.svg";
import "./App.css";
import {
  Route,
  Routes,
  useLocation,
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";
import Test1 from "./pages/test1";
import voca from "voca";

export const getSubDomainFromLocation = () => {
  const hostname = window.location.hostname;
  const sub = voca.split(hostname, ".")[0];
  return sub;
};

function App() {
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
