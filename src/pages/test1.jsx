import { Fragment, useState } from "react";

const Test1 = () => {
  const [value, setValue] = useState("");
  const mainDomain = "krubkrong.app";
  return (
    <div>
      123
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
          window.location.replace("https://" + sub + "." + mainDomain);
        }}
      >
        redirect
      </button>
    </div>
  );
};

export default Test1;
