import React from 'react'
import Iframe from './Iframe'
import Technologies from './Technologies'
import SynthBall from '../Images/synth_ball.jpg'
import RubyLogo from '../Images/ruby_logo.png'
import ReactLogo from '../Images/react_logo.png'
import CypressLogo from '../Images/cypress.png'
import { Grid, Container, Card, Image, Header } from 'semantic-ui-react'

const LandingPage = () => {
  const synthwaveBall = (
    <img id="synthwave-pic" src={SynthBall} alt="Jonas Picture" />
  )
  const rubyPic = (
    <Image className="card-pic" src={RubyLogo} alt="Ruby on Rails Logo" />
  )
  const reactPic = (
    <Image className="card-pic" src={ReactLogo} alt="Cypress Logo" />
  )
  const cypressPic = (
    <Image className="card-pic" src={CypressLogo} alt="Cypress Logo" />
  )
  return (
    <>
      <div id="iframe-container">
        <Iframe />
        <div className="banner-text">
          <h1 id="banner-header">
            ◪ ◬ ◒ ✕
            <br />
            FRONT END
            <br />
            DEVELOPER
            <br />
            BASED IN STOCKHOLM, SWEDEN
          </h1>
        </div>
      </div>
      <Container id="intro-container">
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
      </Container>
      <div id="work">
        <p className="work-paragraph">
          While working on my projects
          <br />
          I've used a variety of frameworks and dependencies
        </p>
      </div>
      <br />
      <div id="synth-banner">
        <div id="card-banner">{synthwaveBall}</div>
        <Container id="landing-container">
          <Grid id="landing-grid" container columns={3}>
            <Grid.Column className="landing-column">
              <Card id="landing-card">
                <center>{reactPic}</center>
                <h3 className="card-header">ReactJS</h3>
                <p className="card-text">
                  While writing the Back End parts of my projects, I've been
                  working in the Ruby on Rails framework so far.
                </p>
              </Card>
            </Grid.Column>
            <Grid.Column className="landing-column">
              <Card id="landing-card">
                <center>{rubyPic}</center>
                <h3 className="card-header">Ruby on Rails</h3>
                <p className="card-text">
                  While writing the Back End parts of my projects, I've been
                  working in the Ruby on Rails framework so far.
                </p>
              </Card>
            </Grid.Column>
            <Grid.Column className="landing-column">
              <Card id="landing-card">
                <center>{cypressPic}</center>
                <h3 className="card-header">TDD/BDD</h3>
                <p className="card-text">
                  While writing the Back End parts of my projects, I've been
                  working in the Ruby on Rails framework so far.
                </p>
              </Card>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
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
