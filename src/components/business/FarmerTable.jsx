import React from "react";
import { Table } from "reactstrap";
import img from "../../assets/images/fish.jpg";
import fishes from "../../private/fish";

const FarmerTable = () => {
  return (
    <Table border={true} hover responsive bgcolor="white">
      <thead className="table_bg text-secondary">
        <tr>
          <th></th>
          <th className="px-5">window</th>
          <th className="text-nowrap px-5">Fish Name</th>
          <th className="text-nowrap px-5">Total Quantity</th>
          <th className="text-nowrap px-5">Total Purchased</th>
          <th className="text-nowrap px-5">Quantity Remaining</th>
          <th className="text-center">Amount</th>

          <th className="px-5">Status</th>
        </tr>
      </thead>
      <tbody>
        {fishes.map(
          ({
            image,
            name,
            code,
            category,
            quantity,
            purchase,
            remaining,
            amount,
            status,
          }) => (
            <tr>
              <td>
                <img
                  src={image}
                  alt=""
                  className="rounded-circle table_img"
                  width={50}
                  height={50}
                />
              </td>
              <td className="">
                <div className="text-secondary">
                  <span className="d-flex flex-column table_text text-nowrap px-5">
                    <span>{name}</span>
                    <span className="small">{code}</span>
                  </span>
                </div>
              </td>
              <td className="text-secondary px-5 text-nowrap">{category}</td>
              <td className="text-secondary px-5 text-center">
                {quantity.toLocaleString()}
              </td>
              <td className="text-secondary px-5 text-center">
                {purchase.toLocaleString()}
              </td>
              <td className="text-secondary px-5 text-center">
                {remaining.toLocaleString()}
              </td>
              <td className="t-green text-center">
                {amount.toLocaleString("en-GH", {
                  style: "currency",
                  currency: "GHS",
                })}
              </td>

              <td>
                <span
                  className={
                    status === "Pending"
                      ? "status px-5"
                      : status === "Completed"
                      ? "px-5 completed"
                      : "ongoing px-5"
                  }
                >
                  {status}
                </span>
              </td>
            </tr>
          )
        )}
      </tbody>
    </Table>
  );
};

export default FarmerTable;
