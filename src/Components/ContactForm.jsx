import React, { Component } from 'react'
import emailjs from 'emailjs-com'
import { Icon } from 'semantic-ui-react'
import Arcade from '../Images/arcade.jpg'
class ContactForm extends Component {
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
    const arcadePic = (
      <img className="retro-pic" src={Arcade} alt="Arcade Picture" />
    )
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
        </div>
        <form id="contact-form" onSubmit={this.emailHandler.bind(this)}>
          <div className="background">
            <div className="container">
              <div className="screen">
                <div className="screen-header"></div>
                <div className="screen-body">
                  <div className="screen-body-item left">
                    <div className="app-title">
                      <span>CONTACT</span>
                      <br />
                      <span>ME</span>
                      <div id="contact-icons">
                        <a
                          className="icon-link"
                          href="https://github.com/jonas-masharqa"
                        >
                          <Icon size="large" name="github square" />
                        </a>
                        <br />
                        <br />
                        <a
                          className="icon-link"
                          href="https://se.linkedin.com/in/jonas-masharqa-b759bb18a/%7Bcountry%3Dse%2C+language%3Dsv%7D?trk=people-guest_profile-result-card_result-card_full-click"
                        >
                          <Icon size="large" name="linkedin square" />
                        </a>
                        <br />
                        <br />
                        <Icon size="large" name="mail">
                          <p id="email-adress">jonas.masharqa@gmail.com</p>
                        </Icon>
                      </div>
                    </div>
                    <div className="app-contact">
                      SWEDEN NO :<br /> +46 793 40 53 98
                    </div>
                  </div>
                  <div className="screen-body-item">
                    <div className="app-form">
                      <div className="app-form-group">
                        <input
                          onChange={this.inputHandler}
                          name="name"
                          className="app-form-control"
                          placeholder="ENTER YOUR NAME"
                        />
                      </div>
                      <div className="app-form-group">
                        <input
                          onChange={this.inputHandler}
                          name="email"
                          className="app-form-control"
                          placeholder="ENTER YOUR EMAIL"
                        />
                      </div>
                      <div className="app-form-group">
                        <input
                          name="subject"
                          className="app-form-control"
                          placeholder="SUBJECT"
                        />
                      </div>
                      <div className="app-form-group message">
                        <textarea
                          onChange={this.inputHandler}
                          name="message"
                          id="message-field"
                          className="app-form-control"
                          placeholder="MESSAGE"
                        />
                      </div>
                      <div className="app-form-group buttons">
                        <button className="app-form-button">SEND</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <center>
                {responseMessage}
                <div>{errorMessage}</div>
              </center>
              <div className="credits">
                inspired by
                <a
                  className="credits-link"
                  href="https://dribbble.com/shots/2666271-Contact"
                  target="_blank"
                >
                  <svg className="dribbble" viewBox="0 0 200 200">
                    <g stroke="#ffffff" fill="none">
                      <circle
                        cx="100"
                        cy="100"
                        r="90"
                        strokeWidth="20"
                      ></circle>
                      <path
                        d="M62.737004,13.7923523 C105.08055,51.0454853 135.018754,126.906957 141.768278,182.963345"
                        strokeWidth="20"
                      ></path>
                      <path
                        d="M10.3787186,87.7261455 C41.7092324,90.9577894 125.850356,86.5317271 163.474536,38.7920951"
                        strokeWidth="20"
                      ></path>
                      <path
                        d="M41.3611549,163.928627 C62.9207607,117.659048 137.020642,86.7137169 189.041451,107.858103"
                        strokeWidth="20"
                      ></path>
                    </g>
                  </svg>
                  Gururaj
                </a>
              </div>
            </div>
          </div>
        </form>
      </>
    )
  }
}
export default ContactForm
