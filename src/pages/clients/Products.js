import React, { useState } from "react";
import LargeText from "../../components/clients/LargeText";
import NavBar from "../../components/clients/NavBar";
import fish from "../../assets/images/fish.png";
import { AiFillTag } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import Footer from "../../components/clients/Footer";
import { Link } from "react-router-dom";
import { Input } from "reactstrap";
import { BsSearch } from "react-icons/bs";
import fishes from "../../private/fish";
import { FiChevronDown } from "react-icons/fi";
const Products = () => {
  const [view, setView] = useState(20);

  const handleClick = () => {
    setView(() => view + 20);
  };

  console.log(view);

  return (
    <div>
      <NavBar bg="bg-dark" />
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <LargeText coloredText="products" text="lISTINGS" />
          <div class="input-group mb-3 w-25">
            <span class="input-group-text" id="basic-addon1 text-secondary">
              <BsSearch className="mx-2" />
              Search
            </span>
            <Input
              type="select"
              class="form-control focus-ring focus-ring-light"
              placeholder="Search by name, price..."
              aria-label="Username"
              aria-describedby="basic-addon1"
            >
              <option value="select">Select category</option>
              {fishes.map(({ category }) => (
                <>
                  <option value={category}>{category}</option>
                </>
              ))}
            </Input>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row gy-4">
          {fishes.slice(0, view).map(({ category, image }) => (
            <Link
              to="/products-location"
              className="col-sm-3 fish_card_container"
            >
              {/* <Link to="" className="open_more">
                Open
              </Link> */}
              <div className="fish_card_tranpsarent ">
                <div className="fish_image">
                  <img
                    src={image}
                    alt=""
                    width={300}
                    className="d-block mx-auto"
                  />
                </div>
                <div className="card_text shadow text-secondary pt-2">
                  <h4 className="text-center">{category}</h4>
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
            </Link>
          ))}
        </div>
      </div>

      <div className="d-flex justify-content-center my-4">
        <button
          className="btn btn-success"
          onClick={handleClick}
          disabled={view === fishes.length}
        >
          View More <FiChevronDown />
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
