import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const Sidebar = () => {
  return (
    <>
      {/* <Menu text vertical fixed='left' id='sidebar'>
        <Menu.Item header 
          className='sidebar-item'
          id='sidebar-header'
          name='Jonas Masharqa'
          as={NavLink}
          to='/'
        />
        <Menu.Item 
          className='sidebar-item'
          name='Projects'
          as={NavLink}
          to='/projects'
        />
        <Menu.Item 
          className='sidebar-item'
          name='About me'
          as={NavLink}
          to='/about'
        />
        <Menu.Item 
          className='sidebar-item'
          name='Contact'
          as={NavLink}
          to='/contact'
        />
      </Menu> */}
    </>
  )
}

export default Sidebar
