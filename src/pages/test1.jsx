import { Fragment, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getSubDomainFromLocation } from "../App";

const Test1 = () => {
  const location = useLocation();
  const param = useParams();
  console.log("log", location, param);
  const [value, setValue] = useState("");
  const mainDomain = "krubkrong.app";

  return (
    <div>
      your subdomain = {getSubDomainFromLocation()}
      <br />
      <input
        onChange={(e) => {
          const value = e.target.value;
          console.log("v", value);
          setValue(value);
        }}
      />
      <button
        onClick={() => {
          const sub = value;
          window.location.replace("http://" + sub + "." + mainDomain);
        }}
      >
        redirect
      </button>
    </div>
  );
};

export default Test1;
