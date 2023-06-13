import React, { useState } from "react";
import "../../assets/styles/farmer.css";
import { Link } from "react-router-dom";
import { CiGrid42 } from "react-icons/ci";
import { DiDatabase } from "react-icons/di";
import { GiChart, GiRodOfAsclepius } from "react-icons/gi";
import { IoMenu } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { SlSettings } from "react-icons/sl";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineFileUpload } from "react-icons/md";
import { TbBusinessplan, TbLogout } from "react-icons/tb";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import img from "../../assets/images/fish.jpg";
import TotalSalesCard from "../../components/business/TotalSalesCard";
import SalesGraph from "../../components/business/SalesGraph";
import {
  Input,
  Modal,
  ModalBody,
  Progress,
  Table,
  UncontrolledCarousel,
} from "reactstrap";
import FarmerTable from "../../components/business/FarmerTable";
import Sidebar from "../../components/business/Sidebar";
import AddWindowCard from "../../components/business/AddWindowCard";

const FarmerDashboard = () => {
  const [fingerlings, setFingerlings] = useState(false);
  const [juvinielle, setJuvineille] = useState(false);
  const [growout, setGrowOut] = useState(false);

  const toggle = () => setFingerlings(!fingerlings);

  const handleFingerlings = () => {
    setFingerlings(!fingerlings);
  };
  const handleJuvinielle = () => {
    setJuvineille(!juvinielle);
  };
  const handleGrowout = () => {
    setGrowOut(!growout);
  };

  const [count, setCount] = useState(1);
  const cards = [];
  const handleClick = () => {
    setCount((count) => count + 1);
  };
  for (let i = 0; i < count - 1; i++) {
    cards.push("card");
  }
  const [openwindow, setOpenWindow] = useState(false);
  const handleOpenWindow = () => {
    setOpenWindow(true);
  };
  return (
    <div className="d-flex farmer_dash">
      <Sidebar />
      <div className="main_body">
        <div className="card_container_fluid"></div>
        <div className="sales_card__grid">
          <TotalSalesCard />
          <TotalSalesCard />
          <TotalSalesCard />
          <AddWindowCard onClick={handleClick} />
        </div>
        <div className="mt-4 card border-0 mx-3 shadow-lg py-3">
          <SalesGraph />
        </div>
        <div className="mx-3 p-3 card shadow  border-0 mt-3">
          <FarmerTable />
        </div>
      </div>
      <div className="right">
        <div
          className="card border-0 mx-3 mt-5 shadow pb-2 pt-1 px-2"
          style={{ height: "10rem" }}
        >
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/0bf8viUAJD0?clip=UgkxlCszwfwdAIOX40go6vLFwXQ78TEBKwUD&amp;clipt=EAAYlMQB"
            title="YouTube video player"
            frameborder="0"
            className="rounded"
            // allow="accelerometer; autoPlay; clipboardWrite; encryptedMedia; gyroscope; pictureInPicture; webShare "
            allowFullScreen
          ></iframe>
        </div>

        {cards.map((item) => (
          <div
            className="card border-0 mx-3 mt-3 shadow pb-2 pt-1 px-2"
            // style={{ width: "17rem", height: "12rem" }}
          >
            <p className="mb-0">
              {new Date().toLocaleDateString("en", { dateStyle: "medium" })}{" "}
              {new Date().toLocaleTimeString("en", {})}
            </p>
            <div className="row align-items-center mt-3">
              <div className="col-3">
                <button
                  className="btn btn-dark text-nowrap rounded-pill btn-sm py-0"
                  onClick={handleFingerlings}
                >
                  Level 1
                </button>
              </div>
              <div className="col-9">
                <Progress
                  style={{ height: "0.25rem" }}
                  value={0}
                  color="dark"
                ></Progress>
                {/* <div className="text-center">50</div> */}
              </div>
            </div>
            <div className="row align-items-center mt-3">
              <div className="col-3">
                <button
                  className="btn btn-dark text-nowrap rounded-pill btn-sm py-0"
                  onClick={handleJuvinielle}
                  disabled
                >
                  Level 2
                </button>
              </div>
              <div className="col-9">
                <Progress
                  style={{ height: "0.25rem" }}
                  value={0}
                  color="dark"
                ></Progress>
                {/* <div className="text-center">50</div> */}
              </div>
            </div>
            <div className="row align-items-center mt-3">
              <div className="col-3">
                <button
                  className="btn btn-dark text-nowrap rounded-pill btn-sm py-0"
                  onClick={handleGrowout}
                  disabled
                >
                  Level 3
                </button>
              </div>
              <div className="col-9">
                <Progress
                  style={{ height: "0.25rem" }}
                  value={0}
                  color="dark"
                ></Progress>
                {/* <div className="text-center">50</div> */}
              </div>
            </div>
          </div>
        ))}

        <Modal
          isOpen={fingerlings}
          centered
          toggle={() => setFingerlings(!fingerlings)}
          size="lg"
        >
          <ModalBody>
            <h4>Fingerlings</h4>
            <Table className="text-center" responsive bordered>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Size</th>
                  <th>Quantity</th>
                  <th>Number of Weeks</th>
                </tr>
              </thead>
              <tbody aria-sort="other">
                <tr contentEditable draggable>
                  <td>
                    <Input type="select" className="form-control border-0">
                      <option value="tilapi">Tilapia</option>
                      <option value="red">Red fish</option>
                      <option value="sarmon">Sarmon</option>
                    </Input>
                  </td>
                  <td>3kg</td>
                  <td>10000</td>
                  <td>2 weeks</td>
                </tr>
              </tbody>
            </Table>
          </ModalBody>
        </Modal>

        {/* juvinielle */}
        <Modal
          isOpen={juvinielle}
          centered
          toggle={() => setJuvineille(!juvinielle)}
          size="lg"
        >
          <ModalBody>
            <h4>Juvinielle</h4>
            <Table
              className="text-center"
              responsive
              bordered
              contentEditable
              aria-sort="ascending"
              draggable
              spellCheck
            >
              <thead>
                <tr>
                  <th>Size</th>
                  <th>Quantity</th>
                  <th>Number of Weeks</th>
                </tr>
              </thead>
              <tbody aria-sort="other">
                <tr>
                  <td>3gk</td>
                  <td>10000</td>
                  <td>2 weeks</td>
                </tr>
              </tbody>
            </Table>
          </ModalBody>
        </Modal>
        {/* juvinielle */}
        <Modal
          isOpen={growout}
          centered
          toggle={() => setGrowOut(!growout)}
          size="lg"
        >
          <ModalBody>
            <h4>Grow out</h4>
            <Table
              className="text-center"
              responsive
              bordered
              contentEditable
              aria-sort="ascending"
              draggable
              spellCheck
            >
              <thead>
                <tr>
                  <th>Size</th>
                  <th>Quantity</th>
                  <th>Number of Weeks</th>
                </tr>
              </thead>
              <tbody aria-sort="other">
                <tr>
                  <td>3gk</td>
                  <td>10000</td>
                  <td>2 weeks</td>
                </tr>
              </tbody>
            </Table>
          </ModalBody>
        </Modal>

        <button
          className="btn btn-dark mt-3 d-block mx-auto w-75 shadow mb-5"
          onClick={handleOpenWindow}
        >
          Open window
        </button>
        <Modal
          isOpen={openwindow}
          toggle={() => setOpenWindow(false)}
          centered
          size="sm"
        >
          <ModalBody>
            <div className="text-center">
              <h1>OOPS!</h1>
              {cards.length === 0 ? (
                <p>No pond added yet</p>
              ) : (
                <p>All Check are not yet done</p>
              )}
            </div>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
};

export default FarmerDashboard;
