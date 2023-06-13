import React, { useState } from "react";
import Sidebar from "../../components/business/Sidebar";
import { Input, Table } from "reactstrap";
import fish from "../../assets/images/fish.jpg";
import fishes from "../../private/fish";

const Orders = () => {
  const [isImage, setImage] = useState(null);
  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="d-flex farmer_dash">
      <Sidebar />
      <div className="main-body w-75 ">
        <div className="card_container_fluid overflow-y-scroll"></div>
        <div className="container my-3">
          <div
            className="card border-0 shadow rounded"
            style={{ borderRadius: "10px" }}
          >
            <div className="d-block bg-success py-3 px-5 text-white fs-3">
              Incoiming orders
            </div>
            <Table responsive border={true} hover striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Customer name</th>
                  <th>Location</th>
                  <th>Total</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {fishes.map(({ category, name, location, amount }, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{category}</td>
                    <td>{name}</td>
                    <td>{location}</td>
                    <td>{amount}</td>
                    <td>03/05/2023</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
