import React from 'react'
import Synthwave from '../Images/synthwave-banner.jpg'
import RubyLogo from '../Images/ruby_logo.png'
import ReactLogo from '../Images/react_logo.png'
import CypressLogo from '../Images/cypress.png'
import { Grid, Container, Card, Image } from 'semantic-ui-react'

const LandingPage = () => {
  const synthwavePic = (
    <img id="synthwave-pic" src={Synthwave} alt="Jonas Picture" />
  )
  const rubyPic = <Image className="card-pic" src={RubyLogo} alt="Ruby on Rails Logo" />
  const reactPic = <Image className="card-pic" src={ReactLogo} alt="Cypress Logo" />
  const cypressPic = <Image className="card-pic" src={CypressLogo} alt="Cypress Logo" />

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
            Taught from the start to work in an agile way, always in a test
            driven environemnt.
          </p>
        </div>
        <div>{synthwavePic}</div>
      </div>
      <Container id="landing-container">
        <Grid id="landing-grid" container columns={3}>
          <Grid.Column className="landing-column">
            <Card id="landing-card">
              <center>{reactPic}</center>
              <h3 className="card-header">React</h3>
              <p className="card-text">
                While writing the Back End parts of my projects, I've been
                working in the Ruby on Rails framework so far.
              </p>
              React
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
              <h3 className="card-header">TDD</h3>
              <p className="card-text">
                While writing the Back End parts of my projects, I've been
                working in the Ruby on Rails framework so far.
              </p>
            </Card>
          </Grid.Column>
        </Grid>
      </Container>
    </>
  )
}

export default LandingPage
