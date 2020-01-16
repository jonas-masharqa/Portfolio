import React from 'react'
import SynthBall from '../Images/synth_ball.jpg'
import RubyLogo from '../Images/ruby_logo.png'
import ReactLogo from '../Images/react_logo.png'
import CypressLogo from '../Images/cypress.png'
import { Grid, Container, Card, Image, Header } from 'semantic-ui-react'

const Work = () => {
  const synthwaveBall = (
    <img id="synthwave-pic" src={SynthBall} alt="Synthwave Picture" />
  )
  const rubyPic = (
    <Image className="card-pic" src={RubyLogo} alt="Ruby on Rails Logo" />
  )
  const reactPic = (
    <Image className="card-pic" src={ReactLogo} alt="React Logo" />
  )
  const cypressPic = (
    <Image className="card-pic" src={CypressLogo} alt="Cypress Logo" />
  )
  return (
    <>
      <div id="work">
        <p className="work-paragraph">
          While working on my projects
          <br />I use a variety of frameworks and dependencies
        </p>
      </div>
      <br />
      <div id="synth-banner">
        <div id="card-banner">{synthwaveBall}</div>
        <div id="landing-container">
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
        </div>
      </div>
    </>
  )
}

export default Work
