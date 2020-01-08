import React from 'react'
import Synthwave from '../Images/synthwave-banner.jpg'

const LandingPage = () => {
  const synthwavePic = (
    <img id="synthwave-pic" src={Synthwave} alt="Jonas Picture" />
  )
  return (
    <>
      <div id="synth-banner">
        <div className="banner-text">
          <h1 id="banner-header">
            Front End Developer based in Stockholm, Sweden
          </h1>
          <p className="banner-paragraph">
            Hi! I'm Jonas. Ever since programming caught my interest, I've
            developed a growing passion for Front End Web Development.
            <br />
            Taught from the start to work in an agile way, always in a test driven environemnt.
          </p>
        </div>
        <div>{synthwavePic}</div>
      </div>
    </>
  )
}

export default LandingPage
