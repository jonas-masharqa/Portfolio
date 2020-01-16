import React from 'react'
import Profile from '../Images/profpic.jpg'
import { Image, Header } from 'semantic-ui-react'

const Intro = () => {
  const profPic = <Image id="prof-pic" src={Profile} alt="Jonas Profile Pic" />

  return (
    <>
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
    </>
  )
}

export default Intro
