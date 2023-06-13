import React from "react";
import "../../assets/styles/farmer.css";
import { Link, NavLink } from "react-router-dom";
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
import logo from "../../assets/images/logo.png";
import TotalSalesCard from "../../components/business/TotalSalesCard";
import SalesGraph from "../../components/business/SalesGraph";
const Sidebar = () => {
  return (
    <div className="sidebar shadow-lg">
      <div className="sidebar_logo">
        <img src={logo} alt="" className="img-fluid" width={100} />
      </div>
      {/* <IoMenu className="menu" size={20} /> */}
      {/* <div className="search_form">
          <input
            type="text"
            placeholder="search..."
            className="search_form_control"
          />
          <BsSearch className="search" size={10} />
        </div> */}
      <ul className="farmer_navs">
        <li>
          <NavLink to="/farmer-dashboard" className="farmer_links">
            <CiGrid42 className="mx-2" />
            Dashboard
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to=""
            className="farmer_links"
          >
            <GiChart className="mx-2" />
            Analytics
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/farmer-orders" className="farmer_links">
            <HiOutlineClipboardDocumentCheck className="mx-2" />
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink to="/farmer-upload" className="farmer_links">
            <MdOutlineFileUpload className="mx-2" />
            Upload
          </NavLink>
        </li>
        <li>
          <NavLink to="/farmer-company" className="farmer_links">
            <TbBusinessplan className="mx-2" />
            Company
          </NavLink>
        </li>
      </ul>
      <ul className="sidebar_footer">
        <li>
          <NavLink to="" className="rounded-circle profile_img d-block">
            {/* <img src={img} alt="" className="img-fluid" height={200} /> */}
          </NavLink>
        </li>
        <li>
          <NavLink to="">
            <IoMdNotificationsOutline size={25} />
          </NavLink>
        </li>
        <li>
          <NavLink to="">
            <SlSettings size={25} />
          </NavLink>
        </li>
        <li>
          <NavLink to="" className="logout">
            <TbLogout size={25} />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
