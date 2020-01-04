import React, { Component } from 'react'
import axios from 'axios'
import ProjectCard from './ProjectCard'
import { Grid, Container } from 'semantic-ui-react'

class Projects extends Component {
  state = {
    projects: []
  }

  componentDidMount() {
    axios.get('/data/projectsData.json').then(response => {
      this.setState({
        projects: response.data
      })
    })
  }

  render() {
    const projects = this.state.projects
    let projectsList

    if (projects.length > 0) {
      projectsList = projects.map(project => {
        return (
          <div key={project.id}>
            <ProjectCard project={project} />
          </div>
        )
      })
    }

    return (
      <>
        <Container>
          <h1 className="ui header">My Projects</h1>
          <div>{projectsList}</div>
        </Container>
      </>
    )
  }
}

export default Projects
