import React from "react";
import Transaction from "./components/Transaction";
import FormComponent from "./components/FormComponent";
import "./App.css";

function App() {
  const design = { color: "red", textAlign: "center", fontSize: "1.5rem" };
  return (
    <div className="container">
      <h1 style={design}>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>
      <FormComponent></FormComponent>
      <Transaction></Transaction>
    </div>
  );
}

export default App;
