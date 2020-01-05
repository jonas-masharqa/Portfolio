import React from 'react'
import { Card, Image, Grid } from 'semantic-ui-react'

const ProjectCard = (props) => {
  let project = props.project
  return (
    <>
      <Grid.Column>
        <Card className='project-card'>
          <Image 
            className='project-image'
            src={project.image}
          />
          <Card.Content>
            <Card.Header>{project.name}</Card.Header>
            <Card.Description>{project.info}</Card.Description>
          </Card.Content>
        </Card>
      </Grid.Column>
    </>
  )
}

export default ProjectCard