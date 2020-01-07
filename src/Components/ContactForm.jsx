import React from 'react'
import emailjs from 'emailjs-com'
import { Icon } from 'semantic-ui-react'

const ContactForm = () => {

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'default_service',
        'template_whQB4I7z',
        e.target,
        'user_Y0S8nUS9ZEDFDPQgBtEin'
      )
      .then(
        result => {
          console.log('success')
        },
        error => {
          console.log('failed')
        }
      )
  }

  return (
    <>
    
      <form id="contact-form" onSubmit={sendEmail}>
        <div className="background">
          <div onSubmit={sendEmail} class="container">
            <div className="screen">
              <div className="screen-header"></div>
              <div className="screen-body">
                <div className="screen-body-item left">
                  <div className="app-title">
                    <span>CONTACT</span>
                    <br />
                    <span>ME</span>
                      <div id='contact-icons'>
                        <a className='icon-link'href='https://github.com/jonas-masharqa'><Icon size='large' name='github square'/></a>
                        <br/>
                        <br/>
                        <a className='icon-link' href='https://se.linkedin.com/in/jonas-masharqa-b759bb18a/%7Bcountry%3Dse%2C+language%3Dsv%7D?trk=people-guest_profile-result-card_result-card_full-click'><Icon size='large' name='linkedin square'/></a>
                        <br/>
                        <br/>
                        <Icon size='large' name='mail'><p id='email-adress'>jonas.masharqa@gmail.com</p></Icon>
                      </div>
                  </div>
                  <div className="app-contact">
                    CONTACT INFO SWE :<br /> +46 793 40 53 98
                  </div>
                </div>
                <div className="screen-body-item">
                  <div className="app-form">
                    <div className="app-form-group">
                      <input
                        name="name"
                        className="app-form-control"
                        placeholder="ENTER YOUR NAME"
                      />
                    </div>
                    <div className="app-form-group">
                      <input
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
            <div className="credits">
              inspired by
              <a
                className="credits-link"
                href="https://dribbble.com/shots/2666271-Contact"
                target="_blank"
              >
                <svg className="dribbble" viewBox="0 0 200 200">
                  <g stroke="#ffffff" fill="none">
                    <circle cx="100" cy="100" r="90" stroke-width="20"></circle>
                    <path
                      d="M62.737004,13.7923523 C105.08055,51.0454853 135.018754,126.906957 141.768278,182.963345"
                      stroke-width="20"
                    ></path>
                    <path
                      d="M10.3787186,87.7261455 C41.7092324,90.9577894 125.850356,86.5317271 163.474536,38.7920951"
                      stroke-width="20"
                    ></path>
                    <path
                      d="M41.3611549,163.928627 C62.9207607,117.659048 137.020642,86.7137169 189.041451,107.858103"
                      stroke-width="20"
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

export default ContactForm
