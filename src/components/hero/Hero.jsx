import React from 'react'

const heroContent = {
  heroImage: 'img/hero/patrick-2.png',
  heroMobileImage: 'patrick-mobile',
  heroTitleName: 'Patrick Yutasane',
  heroDesignation: 'IS TURNING 1',
  heroDescriptions: `PARTY INFO:`,
  heroDate: 'SAT. DECEMBER 11TH AT 11AM',
  heroLocation: 'STEEL PARK 531-565 ILLAWARRA ROAD, MARRICKVILLE',
  heroRsvp: 'PATTY: 0466 247 568 | PROMIE 0423 702 138',
  heroBtn: 'RSVP',
}

const Hero = () => {
  const handleSubmit = (e) => {
    e.preventDefault()

    window.open('https://forms.gle/wvfY3zCRsNUbaFuw9')
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
                <div className="open-sans-font bold">
                  {heroContent.heroDescriptions}
                </div>
                <div className="open-sans-font bold">
                  {heroContent.heroDate}
                </div>
                <div className="open-sans-font bold">
                  {heroContent.heroLocation}
                </div>
                <div className="open-sans-font mb-5 bold">
                  {heroContent.heroRsvp}
                </div>
                <button className="button" onClick={handleSubmit}>
                  <span className="button-text">{heroContent.heroBtn}</span>
                  <span className="button-icon fa fa-arrow-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
