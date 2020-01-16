import React, { Component } from 'react'
import ContactForm from './ContactForm'
import emailjs from 'emailjs-com'
import Arcade from '../Images/arcade.jpg'
class Contact extends Component {
  state = {
    responseMessage: null,
    errorMessage: null,
    form: null,
    name: '',
    email: '',
    message: ''
  }

  inputHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  emailHandler = e => {
    e.preventDefault()
    this.setState({
      form: e.target
    })
    this.sendEmail(this.state.form)
  }

  emailHandler = async e => {
    e.preventDefault()
    await this.setState({
      form: e.target
    })
    if (
      this.state.name.length > 0 &&
      this.state.email.includes('@') &&
      this.state.message.length > 10
    ) {
      this.sendEmail(this.state.form)
    } else {
      this.setState({
        errorMessage:
          'Please enter your name, a valid Email, and at least 10 characters in your message.'
      })
    }
  }

  sendEmail = form => {
    emailjs
      .sendForm(
        'default_service',
        'template_whQB4I7z',
        form,
        'user_Y0S8nUS9ZEDFDPQgBtEin'
      )
      .then(
        result => {
          if (result.status === 200) {
            this.setState({
              responseMessage: 'Email sent!'
            })
          }
        },
        error => {
          this.setState({
            errorMessage: 'Failed, email was not sent.'
          })
        }
      )
  }

  render() {
    const arcadePic = <img className="retro-pic" src={Arcade} alt="Arcade Picture" />
    let responseMessage, errorMessage

    if (this.state.responseMessage) {
      responseMessage = (
        <p id="response-message">{this.state.responseMessage}</p>
      )
    }

    if (this.state.errorMessage) {
      errorMessage = <p id="error-message">{this.state.errorMessage}</p>
    }
    
    return (
      <>
        <div className="banner-container">
          {arcadePic}
          <h1 className="banner-header">Get in touch</h1>
        </div>
        <div id="contact-header-container">
          <p id="contact-main-header">
            Any questions?
            <br /> Feel free to write or call!
          </p>
          <ContactForm
            inputHandler={this.inputHandler}
            responseMessage={this.state.responseMessage}
            errorMessage={this.state.errorMessage}
            emailHandler={this.emailHandler}
          />
        </div>
      </>
    )
  }
}
export default Contact
