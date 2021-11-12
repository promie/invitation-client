import React from 'react'
import PatrickMainPic from '../../assets/img/patrick-2.png'
import PatrickMobilePic from '../../assets/img/patrick-mobile.png'

const heroContent = {
  heroMobileImage: 'patrick-mobile',
  heroTitleName: 'Patrick Yutasane',
  heroDesignation: 'IS TURNING 1',
  heroDescriptions: `PARTY INFO:`,
  heroDate: 'SAT. DECEMBER 11TH AT 11AM',
  heroLocation: 'LOCATION TO BE CONFIRMED',
  heroRsvp: 'PATTY: 0466 247 568 | PROMIE 0423 702 138',
  heroBtn: 'RSVP',
}

const Hero = () => {
  const handleSubmit = (e) => {
    e.preventDefault()

    alert('Still under constructions')
    // window.open('https://forms.gle/wvfY3zCRsNUbaFuw9')
  }

  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${PatrickMainPic})`,
          }}
        />
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start mt-lg-5 pt-lg-5">
          <div>
            <img
              src={PatrickMobilePic}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero man"
            />

            <div className="info-wrapper">
              <div className="info-container">
                <h1 className="text-uppercase poppins-font mt-lg-5">
                  {heroContent.heroTitleName}
                  <span>{heroContent.heroDesignation}</span>
                </h1>

                <div className="inner-info-container">
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
      </div>
    </>
  )
}

export default Hero
