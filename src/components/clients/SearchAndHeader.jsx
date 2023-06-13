import React from "react";
import { BsSearch } from "react-icons/bs";
import LargeText from "./LargeText";
import { Input } from "reactstrap";
import Products from "../../pages/clients/Products";

const SearchAndHeader = ({ text, onChange }) => {
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <LargeText coloredText={text} />
        <div class="input-group mb-3 w-25">
          <span class="input-group-text" id="basic-addon1 text-secondary">
            <BsSearch className="mx-2" />
            Search
          </span>
          <Input
            type="text"
            class="form-control focus-ring focus-ring-light"
            placeholder="Search by name, price..."
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchAndHeader;
