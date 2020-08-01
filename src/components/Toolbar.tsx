import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../assets/css/toolbar.css'

export default () => {
  const links = ['home', 'about', 'portfolio', 'contact'];
  const classes = 'link-text border-b-2 uppercase tracking-wide font-bold py-3 mr-8 ';
  let { pathname } = useLocation();

  const renderLinks = () => (
    links.map(
      link => {
        let linkPath = link === 'home' ? '/' : '/' + link
        let linkClasses = pathname === linkPath ? classes + 'current-path' : classes

        return <Link key={link} className={linkClasses} to={linkPath}>{link}</Link>
      }
    )
  )

  return (
    <nav className="bg-white px-8 shadow-md">
      <div className="-mb-px flex mx-auto justify-center shadow-md">
        {renderLinks()}
      </div>
    </nav>
  )
}