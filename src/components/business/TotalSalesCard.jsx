import React from "react";
import { DiDatabase } from "react-icons/di";

const TotalSalesCard = () => {
  return (
    <div className="sales_card card border-0 rounded shadow-lg">
      <div className="d-flex justify-content-between align-items-start sales_between">
        <div className="sales_text">
          <p className="total_text">Total Sales</p>
          <b className="total_sales">₵53,000</b>
        </div>
        <div className="rounded-circle db">
          <DiDatabase />
        </div>
      </div>
      <p className="mx-2 mt-4">
        <b className="t-green">+55%</b> since Last Week
      </p>
    </div>
  );
};

export default TotalSalesCard;
