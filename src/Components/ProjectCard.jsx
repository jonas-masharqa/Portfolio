import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const ProjectCard = (props) => {
  let project = props.project
  return (
    <>
      <Card>
        <Image 
          className='project-image'
          src={project.image}
        />
        <Card.Content>
          <Card.Header>{project.name}</Card.Header>
          <Card.Description>{project.info}</Card.Description>
        </Card.Content>
      </Card>
    </>
  )
}

export default ProjectCard