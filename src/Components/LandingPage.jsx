import React from 'react'
import Synthwave from '../Images/synthwave-banner.jpg'

const LandingPage = () => {
  const synthwavePic = <img id="synthwave-pic" src={Synthwave} alt="Jonas Picture"/>
  return (
    <>
      <div id='synth-banner'>
        {synthwavePic}
      </div>
    </>
  )
}

export default LandingPage