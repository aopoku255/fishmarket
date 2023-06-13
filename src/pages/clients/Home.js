import React, { useReducer, useState } from "react";
import NavBar from "../../components/clients/NavBar";
import fishimage from "../../assets/images/fish2.jpg";
import {
  BsPlayCircle,
  BsAlarm,
  BsStack,
  BsArrowRightCircle,
} from "react-icons/bs";
import { GiDeliveryDrone } from "react-icons/gi";
import fish from "../../assets/images/fish4.jpg";
import { Link } from "react-router-dom";
import ItemsCard from "../../components/clients/ItemsCard";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  Modal,
  ModalBody,
} from "reactstrap";
import Cards from "../../components/clients/Cards";
import LargeText from "../../components/clients/LargeText";
import ItemSalesCard from "../../components/clients/ItemSalesCard";
import Footer from "../../components/clients/Footer";
import { FiVideo } from "react-icons/fi";
import { fi } from "@faker-js/faker";

const Home = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const items = [
    {
      src: "https://picsum.photos/id/123/1500/600",
      altText: "Slide 1",
      caption: "Slide 1",
      caption1: "Slide 1",
      key: 1,
    },
    {
      src: "https://picsum.photos/id/456/1500/600",
      altText: "Slide 2",
      caption: "Slide 2",
      key: 2,
    },
    {
      src: "https://picsum.photos/id/678/1500/600",
      altText: "Slide 3",
      caption: "Slide 3",
      key: 3,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items?.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        children
        key={item?.src}
      >
        <button
          className="carousel_button btn btn-success rounded-circle py-3 px-3 opacity-75"
          onClick={handleClick}
        >
          <BsPlayCircle size={30} />
        </button>
        <img src={item?.src} alt={item.altText} />

        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
          className="mb-5"
        />
      </CarouselItem>
    );
  });

  return (
    <>
      <div className="bg bg_color">
        <NavBar />
        <div style={{ width: "100%" }}>
          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            fade={true}
            {...args}
            className="d-flex align-items-center justify-content-center"
          >
            {/* <p>Hello</p> */}
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={next}
            />
          </Carousel>
        </div>
        <Modal
          size="xl"
          isOpen={isOpen}
          centered
          {...args}
          toggle={handleClick}
          className=""
        >
          <ModalBody>
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/0bf8viUAJD0?clip=UgkxlCszwfwdAIOX40go6vLFwXQ78TEBKwUD&amp;clipt=EAAYlMQB"
              title="YouTube video player"
              frameborder="0"
              // allow="accelerometer; autoPlay; clipboardWrite; encryptedMedia; gyroscope; pictureInPicture; webShare "
              allowFullScreen
            ></iframe>
          </ModalBody>
        </Modal>

        <ItemsCard />
      </div>
      <section className="">
        <div className="container">
          <LargeText coloredText="Frequently" text="Purchased" />
          <div className="row gy-4">
            <div className="col-sm-4">
              <Cards />
            </div>
            <div className="col-sm-4">
              <Cards />
            </div>
            <div className="col-sm-4">
              <Cards />
            </div>
          </div>
        </div>
      </section>
      <div className="card_container">
        <h1 className="deep_text text-uppercase">Don't miss this chance...!</h1>
        <h3 className="text_below">Buy Below The Normal Price</h3>
        <Link
          to="/window"
          className="btn btn-light bg-white border-0 mt-4 text-secondary"
        >
          Open Available Windows
        </Link>
      </div>
      <div className="container">
        <LargeText coloredText="Frequently" text="Purchased" />
        <div className="display_grid">
          <ItemSalesCard />
          <ItemSalesCard />
          <ItemSalesCard />
          <ItemSalesCard />
          <ItemSalesCard />
          <ItemSalesCard />
          <ItemSalesCard />
          <ItemSalesCard />
        </div>
      </div>

      <div className="container mt-5 text-secondary">
        <div className="row">
          <div className="col-3">
            <div
              className="card p-3 border border-success shadow"
              style={{ height: "15rem" }}
            >
              <p className="fw-bold fs-3">What Our Customers Say About Us</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
                quidem!
              </p>
            </div>
          </div>
          <div className="col-9">
            <div
              className="card p-3 border border-success shadow"
              style={{ height: "15rem" }}
            >
              <p className="fs-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias animi, dolore eveniet optio iure quos officia
                molestiae dolores reprehenderit aspernatur ea quibusdam
                voluptatibus alias perspiciatis quasi corporis, itaque aut? Ab!
              </p>
              <div className="d-flex align-items-center">
                <div
                  className="rounded-circle"
                  style={{ width: "4rem", height: "4rem" }}
                >
                  <img
                    src={fish}
                    alt=""
                    className="img-fluid rounded-circle"
                    style={{
                      width: "4rem",
                      height: "4rem",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="mx-2">
                  <p className="mb-0 fw-bold fs-5">Stephen Frimpong</p>
                  <p className="small">Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
