import React from "react";
import { Table } from "reactstrap";
import img from "../../assets/images/fish.jpg";

const FarmerTable = () => {
  return (
    <Table borderless>
      <thead className="table_bg">
        <tr>
          <th className="text-center">Client</th>
          <th>Details</th>
          <th>Amount</th>
          <th></th>
          <th></th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src={img}
                alt=""
                className="rounded-circle table_img"
                width={30}
                height={30}
              />
              <span className="d-flex flex-column table_text">
                <span>Linus Tabri</span>
                <span className="small">NT154</span>
              </span>
            </div>
          </td>
          <td>Tilapia</td>
          <td className="t-green">50</td>
          <td>-</td>
          <td>-</td>
          <td>
            <span className="status">Pending</span>
          </td>
        </tr>
        <tr>
          <td>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src={img}
                alt=""
                className="rounded-circle table_img"
                width={30}
                height={30}
              />
              <span className="d-flex flex-column table_text">
                <span>Linus Tabri</span>
                <span className="small">NT154</span>
              </span>
            </div>
          </td>
          <td>Tilapia</td>
          <td className="t-green">50</td>
          <td>-</td>
          <td>-</td>
          <td>
            <span className="status">Pending</span>
          </td>
        </tr>
        <tr>
          <td>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src={img}
                alt=""
                className="rounded-circle table_img"
                width={30}
                height={30}
              />
              <span className="d-flex flex-column table_text">
                <span>Linus Tabri</span>
                <span className="small">NT154</span>
              </span>
            </div>
          </td>
          <td>Tilapia</td>
          <td className="t-green">50</td>
          <td>-</td>
          <td>-</td>
          <td>
            <span className="status">Pending</span>
          </td>
        </tr>
        <tr>
          <td>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src={img}
                alt=""
                className="rounded-circle table_img"
                width={30}
                height={30}
              />
              <span className="d-flex flex-column table_text">
                <span>Linus Tabri</span>
                <span className="small">NT154</span>
              </span>
            </div>
          </td>
          <td>Tilapia</td>
          <td className="t-green">50</td>
          <td>-</td>
          <td>-</td>
          <td>
            <span className="status">Pending</span>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default FarmerTable;
