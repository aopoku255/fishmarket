import React, { useState } from "react";
import NavBar from "../../components/clients/NavBar";
import SearchAndHeader from "../../components/clients/SearchAndHeader";
import { Link } from "react-router-dom";
import fishes from "../../private/fish";
import { AiFillTag } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import { CgSize } from "react-icons/cg";
import Footer from "../../components/clients/Footer";

const ProductsLocation = () => {
  const [view, setView] = useState(20);

  const handleClick = () => {
    setView(() => view + 20);
  };

  const [search, setSearch] = useState("");

  return (
    <div>
      <NavBar />
      <SearchAndHeader
        text="Products"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="container mb-5">
        <div className="row gy-4">
          {fishes
            .filter(({ category }) =>
              category.toLowerCase() === ""
                ? category
                : category.toLowerCase()?.includes(search.toLowerCase())
            )
            .slice(0, view)
            .map(({ category, image, location }) => (
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
                    {/* <div className="d-flex  px-2">
                      <CgSize size={20} />
                      <p className=" mx-2">GHC 1200</p>
                    </div> */}
                    <div className="d-flex  px-2">
                      <AiFillTag size={20} />
                      <p className=" mx-2">GHC 1200</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-start pb-3">
                      <div className="d-flex  px-2">
                        <MdLocationOn size={20} />
                        <p className=" mx-2">{location}</p>
                      </div>
                      <button className="btn btn-success btn-sm mx-3 px-4 rounded-pill text-nowrap">
                        Buy me
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductsLocation;
