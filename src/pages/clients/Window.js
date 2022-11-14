import React from "react";
import NavBar from "../../components/clients/NavBar";
import img1 from "../../assets/images/fish4.jpg";
import { Progress } from "reactstrap";
import WindowCard from "../../components/clients/WindowCard";
import Footer from "../../components/clients/Footer";

const Window = () => {
  return (
    <div>
      <NavBar bg="bg-dark" />

      <div className="container">
        <div className="window_grid mt-5">
          <WindowCard />
          <WindowCard />
          <WindowCard />
          <WindowCard />
          <WindowCard />
          <WindowCard />
          <WindowCard />
          <WindowCard />
          <WindowCard />
          <WindowCard />
          <WindowCard />
          <WindowCard />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Window;
