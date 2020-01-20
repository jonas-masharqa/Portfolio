import React, { Component } from 'react'
import axios from 'axios'
import { Container } from 'semantic-ui-react'

class CV extends Component {
  state = {
    resume: null
  }

  componentDidMount() {
    axios.get('/data/cv.json').then(response => {
      this.setState({
        resume: response.data
      })
    })
  }

  render() {
    const resume = this.state.resume
    let goals, education

    if (resume) {
      goals = resume.goals.map(goal => {
        return <li>{goal}</li>
      })
    }

    if (resume) {
      education = resume.education.map(education => {
        return <li>{education}</li>
      })
    }

    return (
      <>
        <Container text>
          <h1>CV</h1>
          <h2>Jonas Masharqa</h2>
          <br />
          <h2>My Goals</h2>
          {goals}
          <br />
          <h2>Education</h2>
          {education}
        </Container>
      </>
    )
  }
}

export default CV