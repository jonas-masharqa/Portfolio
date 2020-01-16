import React from 'react'
import Iframe from './Iframe'
import Work from './Work'
import Technologies from './Technologies'
import Profile from '../Images/profpic.jpg'
import { Grid, Container, Card, Image, Header } from 'semantic-ui-react'

const LandingPage = () => {
  const profPic = (
    <Image id="prof-pic" src={Profile} alt="Jonas Profile Pic" />
  )

  return (
    <>
      <Iframe />
      <div id="intro-container">
        <div id='text-pic'>
          <div id='container-text'>
            <Header id="intro-header" as="h1">
              Hi! <br />
              I'm Jonas
            </Header>
            <p id="intro-paragraph">
              Always applying the <br /> agile approach, <br /> while working in a{' '}
              <br />
              test driven environment!
            </p>
            <p id="intro-paragraph2">
              Ever since programming caught my interest, I've been advancing in both
              Front and Backend Web Development.
              <br />
              As time went by, I developed a growing passion for the Front End side
              of the creative process.
            </p>
          </div>
          <div id='container-pic'>
            {profPic}
          </div>
        </div>
      </div>
      <Work />
      <div id="technologies">
        <p id="tech-paragraph">
          These are some of the
          <br />
          technologies & methodologies I've worked with
        </p>
      </div>
      <Technologies />
    </>
  )
}
export default LandingPage
