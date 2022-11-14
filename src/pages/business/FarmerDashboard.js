import React from "react";
import "../../assets/styles/farmer.css";
import { Link } from "react-router-dom";
import { CiGrid42 } from "react-icons/ci";
import { DiDatabase } from "react-icons/di";
import { GiChart } from "react-icons/gi";
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
import { Table } from "reactstrap";
import FarmerTable from "../../components/business/FarmerTable";

const FarmerDashboard = () => {
  return (
    <div className="d-flex farmer_dash">
      <div className="sidebar shadow-lg">
        <div className="sidebar_logo">FarmLine</div>
        <IoMenu className="menu" size={20} />
        <div className="search_form">
          <input
            type="text"
            placeholder="search..."
            className="search_form_control"
          />
          <BsSearch className="search" size={10} />
        </div>
        <ul className="farmer_navs">
          <li>
            <Link
              to=""
              className="justify-content-start align-items-center farmer_links"
            >
              <CiGrid42 className="mx-2" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="justify-content-start align-items-center farmer_links"
            >
              <GiChart className="mx-2" />
              Analytics
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="justify-content-start align-items-center farmer_links"
            >
              <HiOutlineClipboardDocumentCheck className="mx-2" />
              Orders
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="justify-content-start align-items-center farmer_links"
            >
              <MdOutlineFileUpload className="mx-2" />
              Upload
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="justify-content-start align-items-center farmer_links"
            >
              <TbBusinessplan className="mx-2" />
              Company
            </Link>
          </li>
        </ul>
        <ul className="sidebar_footer">
          <li>
            <Link to="" className="rounded-circle profile_img d-block">
              {/* <img src={img} alt="" className="img-fluid rounded-circle" /> */}
            </Link>
          </li>
          <li>
            <Link to="">
              <IoMdNotificationsOutline />
            </Link>
          </li>
          <li>
            <Link to="">
              <SlSettings />
            </Link>
          </li>
          <li>
            <Link to="" className="logout">
              <TbLogout />
            </Link>
          </li>
        </ul>
      </div>

      <div className="main_body">
        <div className="card_container_fluid"></div>
        <div className="sales_card__grid">
          <TotalSalesCard />
          <TotalSalesCard />
          <TotalSalesCard />
        </div>
        <div className="mt-4 card border-0 mx-3 shadow-lg py-3">
          <SalesGraph />
        </div>
        <div className="mx-3 py-3 card border-0 mt-3">
          <FarmerTable />
        </div>
      </div>
    </div>
  );
};

export default FarmerDashboard;
