import React from 'react'
import { Grid } from 'semantic-ui-react'

const ProjectCard = props => {
  let project = props.project
  return (
    <>
      <Grid.Column>
        <a href={project.link}>
          <div className="project-card">
            <div className="project-image">
              <img id='project-image' src={project.image} alt='project' />
            </div>
            <div className="details">
              <div className="center">
                <h1>
                  {project.name}
                  <br />
                  <span>{project.framework}</span>
                </h1>
                <p>{project.info}</p>
              </div>
            </div>
          </div>
        </a>
      </Grid.Column>
    </>
  )
}

export default ProjectCard
