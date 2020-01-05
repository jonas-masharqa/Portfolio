import React from 'react'
import JonasPic from '../Images/jonas.jpg'
import { Grid, Container } from 'semantic-ui-react'

const AboutMe = () => {
  const jonasPic = <img id='jonas-pic'src={JonasPic} alt='Jonas Picture'/>
  
  return (
    <>
      <Container id='about-container'>
        <Grid>
          <Grid.Column width={5}>
            {jonasPic}
          </Grid.Column>
          <Grid.Column id='about-text' width={8}>
            <h1 id='about-header'>Jonas Masharqa</h1>
            <p className='about-paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p className='about-paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </Grid.Column>
        </Grid>
      </Container>
    </>
  )
}

export default AboutMe