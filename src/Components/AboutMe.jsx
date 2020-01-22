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
              I'm 25 years old born and raised in the capital of Sweden, Stockholm.
              After traveling and living abroad part time for the last five years, I'm now
              based in Sweden again, looking for new experiences.
              <br />
              Whatever I do, I'm always looking for opportunities to learn and advance,
              whether it's about DJ'ing, web development, or personal growth.
            </p>
          </Grid.Column>
        </Grid>
      </Container>
      <Container id="about-container2">
        <Grid>
          <Grid.Column className="about-text" width={7}>
            <h1 className="about-header">Work & Education</h1>
            <p className="about-paragraph">
              It's safe to say that the experiences I've gotten from working are very different from eachother.
              From car technician to sales man, caretaker to sales support agent,
              and finally doing my own projects along with DJ'ing.
              Despite the differences, almost every job I've had has involved working with people
              and/or solving problems.
              <br />
              After getting into web development, I attended a coding bootcamp. I'm now very eager to continue this journey and to find a place where I can
              keep learning, contribute, and grow.
            </p>
          </Grid.Column>
          <Grid.Column width={7}>{electricValley}</Grid.Column>
        </Grid>
      </Container>
    </>
  )
}

export default AboutMe
