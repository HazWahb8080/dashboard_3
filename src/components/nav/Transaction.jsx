import React, { useRef } from "react";
import NavBar from "../navBar/NavBar";
import Input from "./Input";

function Transaction() {
  const ref = useRef(null);
  const handleSubmit = (e) => {
    ref.current.value = "neffex";
    e.preventDefault();
  };
  return (
    <div className="container__">
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input
          refInput={ref}
          label="your username"
          className="smooth py-5"
          placeholder="enter your fucking name"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Transaction;
