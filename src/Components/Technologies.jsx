import React, { Component } from 'react'
import axios from 'axios'
import { Container } from 'semantic-ui-react'

class Technologies extends Component {
  state = {
    data: null
  }

  componentDidMount() {
    axios.get('/data/technologies.json').then(response => {
      debugger
      this.setState({
        data: response.data
      })
    })
  }

  render() {
    const data = this.state.data
    let frameworkList
    let dependencyList
    let skillList

    if (data) {
      frameworkList = data.frameworks.map(framework => {
        return <li>{framework}</li>
      })
    }

    if (data) {
      skillList = data.softSkills.map(skill => {
        return <li>{skill}</li>
      })
    }

    if (data) {
      dependencyList = data.dependencies.map(dependency => {
        return <li>{dependency}</li>
      })
    }

    return (
      <>
        <Container id="tech-container">
          <div id="framework-list">
            <h1 className="list-header">Frameworks / Libraries</h1>
            <ul className="comma-list">{frameworkList}</ul>
          </div>
          <div id="skill-list">
            <h1 className="list-header">Soft Skills / Misc</h1>
            <ul className="comma-list">{skillList}</ul>
          </div>
          <div id="dependency-list">
            <h1 className="list-header">Dependencies etc</h1>
            <ul className="comma-list">{dependencyList}</ul>
          </div>
        </Container>
      </>
    )
  }
}

export default Technologies
