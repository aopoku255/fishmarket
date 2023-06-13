import React, { useState } from "react";
import Sidebar from "../../components/business/Sidebar";
import { Input } from "reactstrap";
import fish from "../../assets/images/fish.jpg";

const Upload = () => {
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
              Products Details
            </div>

            <form action="" className="form px-5 py-4">
              <div className="form-group">
                <label htmlFor="" className="form-label">
                  Product name
                </label>
                <Input type="select">
                  <option value="select">Select product</option>
                  <option value="tilapia">Tilapia</option>
                  <option value="tilapia">Red Fish</option>
                  <option value="tilapia">Sarmon</option>
                </Input>
              </div>
              <div className="form-group mt-4">
                <label htmlFor="" className="form-label">
                  Size
                </label>
                <Input type="select">
                  <option value="select">Select size</option>
                  <option value="tilapia">small</option>
                  <option value="tilapia">Medium</option>
                  <option value="tilapia">Large</option>
                  <option value="tilapia">Extra large</option>
                </Input>
              </div>
              <div className="form-group mt-4">
                <label htmlFor="" className="form-label">
                  Quantity
                </label>
                <input type="number" className="form-control" />
              </div>
              <div className="form-group mt-4">
                <label htmlFor="" className="form-label">
                  Price
                </label>
                <input type="text" className="form-control" />
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

              <div className="d-flex justify-content-between align-items-end">
                <div className="image mt-4">
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
                    className="image-input"
                    onChange={handleChange}
                  />
                </div>

                <button className="btn btn-success mt-4 px-5">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
