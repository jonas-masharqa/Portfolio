import React, { Component } from 'react'
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
    const data = this.state.data
    let goals

    if (data) {
      goals = data.goals.map(goal => {
        return <li>{goals}</li>
      })
    }

    return (
      <>
        <Container text>
          <h1>CV</h1>
          <h2>Jonas Masharqa</h2>
          {}
        </Container>
      </>
    )
  }
}

export default CV