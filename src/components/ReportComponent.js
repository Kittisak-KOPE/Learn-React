import React, { useContext } from "react";
import DataContext from "../data/DataContext";
const ReportComponent = () => {
  const { income, expense } = useContext(DataContext);
  return (
    <div>
      <p>
        รายรับ : {income} รายจ่าย : {expense}
      </p>
    </div>
  );
};

export default ReportComponent;
