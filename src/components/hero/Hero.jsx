import React, { useState } from "react";
import Modal from "react-modal";
import Index from "../about";

const heroContent = {
  heroImage: "img/hero/patrick-2.png",
  heroMobileImage: "patrick-mobile",
  heroTitleName: "Patrick Yutasane",
  heroDesignation: "IS TURNING 1",
  heroDescriptions: `PARTY INFO:`,
  heroDate: 'SAT. DECEMBER 11TH AT 11AM',
  heroLocation: 'STEEL PARK 531-565 ILLAWARRA ROAD, MARRICKVILLE',
  heroRsvp: 'PATTY: 0466 247 568 | PROMIE 0423 702 138',
  heroBtn: "RSVP",
};

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + heroContent.heroImage
            })`,
          }}
         />
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start mt-lg-5 pt-lg-5">
          <div>
            <img
              src={`img/hero/${heroContent.heroMobileImage}.png`}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero man"
            />

            <div className="info-wrapper">
              <div className="info-container">
                <h1 className="text-uppercase poppins-font">
                  {heroContent.heroTitleName}.
                  <span>{heroContent.heroDesignation}</span>
                </h1>
                <div className="open-sans-font bold">{heroContent.heroDescriptions}</div>
                <div className="open-sans-font bold">{heroContent.heroDate}</div>
                <div className="open-sans-font bold">{heroContent.heroLocation}</div>
                <div className="open-sans-font mb-5 bold">{heroContent.heroRsvp}</div>
                <button className="button" onClick={toggleModalOne}>
                  <span className="button-text">{heroContent.heroBtn}</span>
                  <span className="button-icon fa fa-arrow-right" />
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* End home-details-container */}

      {/* Start Modal for About More */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal dark hero"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="/img/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  ABOUT <span>ME</span>
                </h1>
                <span className="title-bg">Resume</span>
              </div>
              {/* End title */}
              <Index />
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for About More */}
    </>
  );
};

export default Hero;
