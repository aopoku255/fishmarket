import React from "react";
import LargeText from "../../components/clients/LargeText";
import NavBar from "../../components/clients/NavBar";
import fish from "../../assets/images/fish.png";
import { AiFillTag } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import Footer from "../../components/clients/Footer";
import { Link } from "react-router-dom";
const Products = () => {
  return (
    <div>
      <NavBar bg="bg-dark" />
      <h1 className="text-center my-3 text_header_bold">Products Listings</h1>
      <div className="container">
        <div className="row gy-4">
          <div className="col-sm-3 fish_card_container">
            <Link to="" className="open_more">
              Open
            </Link>
            <div className="fish_card_tranpsarent ">
              <div className="fish_image">
                <img
                  src={fish}
                  alt=""
                  width={300}
                  className="d-block mx-auto"
                />
              </div>
              <div className="card_text bg-dark text-white pt-2">
                <h4 className="text-center">Red Fish</h4>
                <div className="d-flex  px-2">
                  <AiFillTag size={20} />
                  <p className=" mx-2">GHC 1200 - GHC 5000</p>
                </div>
                <div className="d-flex  px-2">
                  <HiOutlineUserGroup size={20} />
                  <p className=" mx-2">10 selers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="fish_card_tranpsarent ">
              <div className="fish_image">
                <img
                  src={fish}
                  alt=""
                  width={300}
                  className="d-block mx-auto"
                />
              </div>
              <div className="card_text bg-dark text-white pt-2">
                <h4 className="text-center">Red Fish</h4>
                <div className="d-flex  px-2">
                  <AiFillTag size={20} />
                  <p className=" mx-2">GHC 1200 - GHC 5000</p>
                </div>
                <div className="d-flex  px-2">
                  <HiOutlineUserGroup size={20} />
                  <p className=" mx-2">10 selers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="fish_card_tranpsarent ">
              <div className="fish_image">
                <img
                  src={fish}
                  alt=""
                  width={300}
                  className="d-block mx-auto"
                />
              </div>
              <div className="card_text bg-dark text-white pt-2">
                <h4 className="text-center">Red Fish</h4>
                <div className="d-flex  px-2">
                  <AiFillTag size={20} />
                  <p className=" mx-2">GHC 1200 - GHC 5000</p>
                </div>
                <div className="d-flex  px-2">
                  <HiOutlineUserGroup size={20} />
                  <p className=" mx-2">10 selers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="fish_card_tranpsarent ">
              <div className="fish_image">
                <img
                  src={fish}
                  alt=""
                  width={300}
                  className="d-block mx-auto"
                />
              </div>
              <div className="card_text bg-dark text-white pt-2">
                <h4 className="text-center">Red Fish</h4>
                <div className="d-flex  px-2">
                  <AiFillTag size={20} />
                  <p className=" mx-2">GHC 1200 - GHC 5000</p>
                </div>
                <div className="d-flex  px-2">
                  <HiOutlineUserGroup size={20} />
                  <p className=" mx-2">10 selers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="fish_card_tranpsarent ">
              <div className="fish_image">
                <img
                  src={fish}
                  alt=""
                  width={300}
                  className="d-block mx-auto"
                />
              </div>
              <div className="card_text bg-dark text-white pt-2">
                <h4 className="text-center">Red Fish</h4>
                <div className="d-flex  px-2">
                  <AiFillTag size={20} />
                  <p className=" mx-2">GHC 1200 - GHC 5000</p>
                </div>
                <div className="d-flex  px-2">
                  <HiOutlineUserGroup size={20} />
                  <p className=" mx-2">10 selers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="fish_card_tranpsarent ">
              <div className="fish_image">
                <img
                  src={fish}
                  alt=""
                  width={300}
                  className="d-block mx-auto"
                />
              </div>
              <div className="card_text bg-dark text-white pt-2">
                <h4 className="text-center">Red Fish</h4>
                <div className="d-flex  px-2">
                  <AiFillTag size={20} />
                  <p className=" mx-2">GHC 1200 - GHC 5000</p>
                </div>
                <div className="d-flex  px-2">
                  <HiOutlineUserGroup size={20} />
                  <p className=" mx-2">10 selers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="fish_card_tranpsarent ">
              <div className="fish_image">
                <img
                  src={fish}
                  alt=""
                  width={300}
                  className="d-block mx-auto"
                />
              </div>
              <div className="card_text bg-dark text-white pt-2">
                <h4 className="text-center">Red Fish</h4>
                <div className="d-flex  px-2">
                  <AiFillTag size={20} />
                  <p className=" mx-2">GHC 1200 - GHC 5000</p>
                </div>
                <div className="d-flex  px-2">
                  <HiOutlineUserGroup size={20} />
                  <p className=" mx-2">10 selers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="fish_card_tranpsarent ">
              <div className="fish_image">
                <img
                  src={fish}
                  alt=""
                  width={300}
                  className="d-block mx-auto"
                />
              </div>
              <div className="card_text bg-dark text-white pt-2">
                <h4 className="text-center">Red Fish</h4>
                <div className="d-flex  px-2">
                  <AiFillTag size={20} />
                  <p className=" mx-2">GHC 1200 - GHC 5000</p>
                </div>
                <div className="d-flex  px-2">
                  <HiOutlineUserGroup size={20} />
                  <p className=" mx-2">10 selers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
