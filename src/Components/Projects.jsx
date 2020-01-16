import React, { Component } from 'react'
import axios from 'axios'
import RetroTech from '../Images/retro-tech.jpg'
import ProjectCard from './ProjectCard'
import { Grid, Container, Icon } from 'semantic-ui-react'
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
    const retroPic = <img className="retro-pic" src={RetroTech} alt="Retro Picture" />
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
        <div className="banner-container">
          {retroPic}
          <h1 className="banner-header">Projects</h1>
        </div>
        <div id='main-header-container'>
          <p id='project-main-header'>
            Here are some of my projects
            <br /> Find more on Github
            <a href="https://github.com/jonas-masharqa">
              <Icon color='black' name="github square" />
            </a>
          </p>
        </div>
        <Container id='project-card-container'>
          <Grid className="project-grid" centered container columns={3}>
            <Grid.Row>{projectsList}</Grid.Row>
          </Grid>
        </Container>
      </>
    )
  }
}
export default Projects