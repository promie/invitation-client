import React from 'react'
import { Tabs, TabPanel } from 'react-tabs'
import Hero from '../../components/hero/Hero'

const HomeDark = () => {
  return (
    <div className="yellow">
      <Tabs>
        <div className="tab-panel_list">
          <TabPanel className="home">
            <div
              className="container-fluid main-container container-home p-0 "
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="color-block d-none d-lg-block" />
              <Hero />
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  )
}

export default HomeDark
