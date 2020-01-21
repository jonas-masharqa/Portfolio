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
    let goals, education, experiences, progLanguages, merits, softSkills

    if (resume) {
      goals = resume.goals.map(goal => {
        return (
          <p className="cv-text" id="cv-text2">
            {goal}
          </p>
        )
      })
    }

    if (resume) {
      education = resume.education.map(education => {
        return (
          <li className="cv-text" id="cv-text2">
            {education}
          </li>
        )
      })
    }

    if (resume) {
      experiences = resume.experiences.map(experience => {
        return (
          <li className="cv-text" id="cv-text2">
            {experience}
          </li>
        )
      })
    }

    if (resume) {
      progLanguages = resume.progLanguages.map(progLanguage => {
        return (
          <li className="cv-text" id="cv-text2">
            {progLanguage}
          </li>
        )
      })
    }

    if (resume) {
      softSkills = resume.softSkills.map(softSkill => {
        return (
          <li className="cv-text" id="cv-text2">
            {softSkill}
          </li>
        )
      })
    }

    if (resume) {
      merits = resume.merits.map(merit => {
        return (
          <li className="cv-text" id="cv-text2">
            {merit}
          </li>
        )
      })
    }

    return (
      <>
        <br />
        <br />
        <Container id="cv">
          <h1 className="cv-text" id="cv-header">
            Jonas Masharqa
          </h1>
          <br />
          <h2 className="cv-text">My Goals</h2>
          {goals}
          <h2 className="cv-text">Education</h2>
          {education}
          <h2 className="cv-text">Professional Experience</h2>
          {experiences}
          <h2 className="cv-text">Technical & Soft Skills</h2>
          {progLanguages}
          <br />
          {softSkills}
          <h2 className="cv-text">Languages</h2>
          <li className="cv-text" id="cv-text2">
            Swedish - Native language
          </li>
          <li className="cv-text" id="cv-text2">
            English - Very good knowledge both grammatically and speech wise on
            a professional level.
          </li>
          <li className="cv-text" id="cv-text2">
            Thai - OK perception of both speech and understanding.
          </li>
          <h2 className="cv-text">Other Merits</h2>
          {merits}
          <h2 className="cv-text">Interests</h2>
          <p className="cv-text" id="cv-text2">
            My interests consists mostly of seeing my friends, DJ'ing,
            exercising, and traveling.
          </p>
          <h2 className="cv-text">Characteristics</h2>
          <p className="cv-text" id="cv-text2">
            Eager to learn. A team player who can also take command when needed
            and find suitable solutions.
            <br />
            <br />
            I’m strong in creating and maintaining customer relationships.
            <br />
            <br />
            During my travels, I really feel like I got a grasp on how to handle
            and connect with all kinds of different people. Even more so when i
            started my own business, Tribal Pai Backpackers, a hostel with a
            restaurant and bar. 
            <br />
            While running the hostel, I learned how to
            manage people, but also how to make colleagues and employees feel
            valuable as well as the importance of having a strong connection as
            a team.
          </p>
          <h2 className="cv-text">References</h2>
          <p className="cv-text" id="cv-text2">
            References can be given on request.
          </p>
        </Container>
      </>
    )
  }
}

export default CV
