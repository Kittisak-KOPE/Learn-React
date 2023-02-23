import React, { useState } from "react";
import Transaction from "./components/Transaction";
import FormComponent from "./components/FormComponent";
import "./App.css";
import DataContext from "./data/DataContext";
import ReportComponent from "./components/ReportComponent";

function App() {
  const design = { color: "red", textAlign: "center", fontSize: "1.5rem" };
  // const sampleItem = [
  //   { title: "ค่ารักษาพยาบาล", amount: 2000 },
  //   { title: "จ่ายค่าประกัน", amount: 300 },
  // ];
  const [items, setItems] = useState([]);
  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    });
  };
  return (
    <DataContext.Provider
      value={{
        income: 50000,
        expense: -8000,
      }}
    >
      <div className="container">
        <h1 style={design}>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>
        <ReportComponent></ReportComponent>
        <FormComponent onAddItem={onAddNewItem}></FormComponent>
        <Transaction items={items}></Transaction>
      </div>
    </DataContext.Provider>
  );
}

export default App;
