import React, { useState, useEffect } from "react";
import Transaction from "./components/Transaction";
import FormComponent from "./components/FormComponent";
import "./App.css";
import DataContext from "./data/DataContext";
import ReportComponent from "./components/ReportComponent";

function App() {
  const design = { color: "red", textAlign: "center", fontSize: "1.5rem" };
  // const sampleItem = [
  //   { id: 1, title: "ค่าเช่าบ้าน", amount: -2000 },
  //   { id: 2, title: "เงินเดือน", amount: 12000 },
  //   { id: 3, title: "ค่าเดินทาง", amount: 500 },
  //   { id: 4, title: "ขายของ", amount: 2000 },
  // ];
  const [items, setItems] = useState([]);
  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);
  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    });
  };

  useEffect(() => {
    const amounts = items.map((items) => items.amount);
    const income = amounts
      .filter((element) => element > 0)
      .reduce((total, element) => (total += element), 0);
    const expense =
      amounts
        .filter((element) => element < 0)
        .reduce((total, element) => (total += element), 0) * -1;
    setReportIncome(income);
    setReportExpense(expense);
  }, [items, reportIncome, reportExpense]);

  // const [showReport, setShowReport] = useState(false);
  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "SHOW":
  //       return setShowReport(true);
  //     case "HIDE":
  //       return setShowReport(false);
  //   }
  // };
  // const [result, dispatch] = useReducer(reducer, showReport);

  return (
    <DataContext.Provider
      value={{
        income: reportIncome,
        expense: reportExpense,
      }}
    >
      <div className="container">
        <h1 style={design}>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>
        <div>
          <ul className="horizontal-menu">
            <li>
              <a href="#">ข้อมูลบัญชี</a>
            </li>
            <li>
              <a href="#">บันทึกข้อมูล</a>
            </li>
          </ul>
        </div>
        <ReportComponent></ReportComponent>
        <FormComponent onAddItem={onAddNewItem}></FormComponent>
        <Transaction items={items}></Transaction>
        {/* <h1>{result}</h1>
        <button onClick={() => dispatch({ type: "SHOW" })}>แสดง</button>
        <button onClick={() => dispatch({ type: "HIDE" })}>ซ่อน</button> */}
      </div>
    </DataContext.Provider>
  );
}

export default App;
