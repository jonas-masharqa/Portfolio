import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const Sidebar = () => {
  return (
    <>
      <input
        type="checkbox"
        class="openSidebarMenu"
        id="openSidebarMenu"
      ></input>
      <label for="openSidebarMenu" class="sidebarIconToggle">
        <div class="spinner diagonal part-1"></div>
        <div class="spinner horizontal"></div>
        <div class="spinner diagonal part-2"></div>
      </label>
      <div id="sidebarMenu">
        <ul class="sidebarMenuInner">
          <NavLink to="/">
            <li>
              Jonas Masharqa <span>Front End Developer</span>
            </li>
          </NavLink>
          <NavLink to="/projects">
            <li>Projects</li>
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
