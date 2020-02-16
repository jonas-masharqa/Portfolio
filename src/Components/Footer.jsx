import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div id="button"></div>
        <div id="container">
          <div className="footer-center">
            <p>
              <a className="icon-link" href="https://github.com/jonas-masharqa">
                <Icon size="large" name="github square" />
              </a>
              <a
                className="icon-link"
                href="https://se.linkedin.com/in/jonas-masharqa-b759bb18a/%7Bcountry%3Dse%2C+language%3Dsv%7D?trk=people-guest_profile-result-card_result-card_full-click"
              >
                <Icon size="large" name="linkedin square" />
              </a>
              <br />
              <NavLink id="footer-nav" to={'/'}>
                Home
              </NavLink>
              <span> :: </span>
              <NavLink to={'/projects'}>Projects</NavLink>
              <span> :: </span>
              <NavLink to={'/about'}>About Me</NavLink>
              <span> :: </span>
              <NavLink to={'/contact'}>Contact</NavLink>
              <br />
              <span id="copyright">Copyright © 2020 Jonas Masharqa</span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
