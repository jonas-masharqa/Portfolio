import React from 'react'
import { Grid } from 'semantic-ui-react'

const ProjectCard = props => {
  let project = props.project
  return (
    <>
      <Grid.Column>
        <div className="card">
          <div class="image">
            <img src={project.image} />
          </div>
          <div class="details">
            <div class="center">
              <h1>
                {project.name}
                <br />
                <span>Project</span>
              </h1>
              <p>{project.info}</p>
            </div>
          </div>
        </div>
      </Grid.Column>
    </>
  )
}

export default ProjectCard
