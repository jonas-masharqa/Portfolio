import React from 'react'
import Profile from '../Images/profpic.jpg'
import ElectricV from '../Images/electric_valley.jpg'
import { Grid, Container } from 'semantic-ui-react'

const AboutMe = () => {
  const profPic = <img id="jonas-pic" src={Profile} alt="Jonas Picture" />
  const electricValley = <img id="electric-pic" src={ElectricV} alt="DJ Picture" />

  return (
    <>
      <Container id="about-container">
        <Grid>
          <Grid.Column width={7}>{profPic}</Grid.Column>
          <Grid.Column className="about-text" width={7}>
            <h1 className="about-header">Jonas Masharqa</h1>
            <p className="about-paragraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </Grid.Column>
        </Grid>
      </Container>
      <Container id="about-container2">
        <Grid>
          <Grid.Column className="about-text" width={7}>
            <h1 className="about-header">Work & Education</h1>
            <p className="about-paragraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </Grid.Column>
          <Grid.Column width={7}>{electricValley}</Grid.Column>
        </Grid>
      </Container>
    </>
  )
}

export default AboutMe
