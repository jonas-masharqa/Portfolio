import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
      <input
        type="checkbox"
        className="openSidebarMenu"
        id="openSidebarMenu"
      ></input>
      <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
        <div className="spinner diagonal part-1"></div>
        <div className="spinner horizontal"></div>
        <div className="spinner diagonal part-2"></div>
      </label>
      <div id="sidebarMenu">
        <ul className="sidebarMenuInner">
          <NavLink to="/">
            <li>
              Jonas Masharqa <span>Front End Developer</span>
            </li>
          </NavLink>
          <NavLink to="/projects">
            <li>Projects</li>
          </NavLink>
          <NavLink to="/cv">
            <li>CV</li>
          </NavLink>
          <NavLink to="/about">
            <li>About Me</li>
          </NavLink>
          <NavLink to="/contact">
            <li>Contact</li>
          </NavLink>
        </ul>
      </div>
    </>
  )
}

export default Sidebar
