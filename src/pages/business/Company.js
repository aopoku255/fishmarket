import React, { useState } from "react";
import Sidebar from "../../components/business/Sidebar";
import { Input, Table } from "reactstrap";
import fish from "../../assets/images/fish.jpg";

const Company = () => {
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
          <div className="card border-0 shadow">
            <div className="d-block bg-success py-3 px-5 text-white fs-3">
              Company Details
            </div>
            <form action="" className="form px-5 py-4">
              <div className="form-group">
                <label htmlFor="" className="form-label">
                  Company name
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="Fisherzone"
                />
              </div>
              <div className="form-group mt-4">
                <label htmlFor="" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="fisherzon@gmail.com"
                />
              </div>
              <div className="form-group mt-4">
                <label htmlFor="" className="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="0545098438"
                />
              </div>

              <div className="form-group mt-4">
                <label htmlFor="" className="form-label">
                  Location
                </label>
                <Input type="select">
                  <option value="select">Select location</option>
                  <option value="tilapia">Accra</option>
                  <option value="tilapia">Kumasi</option>
                  <option value="tilapia">Sunyani</option>
                  <option value="tilapia">Takoradi</option>
                </Input>
              </div>

              <div className="mt-4">
                <p className="mb-0">Company logo</p>
                <div className="d-flex justify-content-between align-items-end">
                  <div className="image ">
                    {isImage ? (
                      <img
                        src={URL?.createObjectURL(isImage)}
                        alt=""
                        className="img-fluid"
                        width="100%"
                        height="100%"
                        style={{ width: "100%", height: "100%" }}
                      />
                    ) : (
                      <p className="text-success opacity-50 text-center w-75">
                        Drag and drop image
                      </p>
                    )}
                    <input
                      type="file"
                      accept=".jpg,.jpeg,.png"
                      className="image-input"
                      onChange={handleChange}
                    />
                  </div>

                  <button className="btn btn-success mt-4 px-5">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
