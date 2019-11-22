import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <nav className="mb-5">
      <li><NavLink to='/form'>Forms</NavLink></li>
      <li><NavLink to='/communication'>Communication</NavLink></li>
      <li><NavLink to='/routing'>Routing</NavLink></li>
    </nav>
  )
}

export default Header