import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div className="container">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
    </div>
  )
}