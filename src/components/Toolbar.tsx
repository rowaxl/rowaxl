import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default () => {
  const links = ['home', 'about', 'portfolio', 'contact'];
  const classes = 'link-text border-b-2 uppercase tracking-wide font-bold py-3 mr-8 ';
  let { pathname } = useLocation();

  const renderLinks = () => (
    links.map(
      link => {
        let linkPath = link === 'home' ? '/rowaxl' : '/' + link
        let linkClasses = pathname === linkPath ? classes + 'current-path' : classes

        return <Link key={link} className={linkClasses} to={linkPath}>{link}</Link>
      }
    )
  )

  return (
    <nav className="px-8 py-4 flex justify-between">
      <p className="text-4xl font-bold">
        Wonjae Kim
      </p>

      <div className="flex justify-center">
        {renderLinks()}
      </div>
    </nav>
  )
}