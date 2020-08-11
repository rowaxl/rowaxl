import React, { FunctionComponent, useState } from 'react'

type PhotoCardProps = {
  src: string,
  alt: string,
  showButtonText: string,
  hideButtonText: string,
}

export const PhotoCard: FunctionComponent<PhotoCardProps> =
  ({ src, alt, showButtonText, hideButtonText, children }) => {

  const [showProfile, setShowProfile] = useState(false)
  const toggleShowProfile = () => setShowProfile(!showProfile)

  const showOverlay = () => "overlay " + (showProfile ? "show" : "hide")

  const renderToggleButton = () => {
    if (!showProfile) {
      return (
        <button
          className="float-button hover:bg-transparent bg-blue-500 hover:text-blue-200 font-semibold text-white py-2 px-4 border hover:border-blue-200 border-transparent rounded font-bold"
          onClick={toggleShowProfile}
        >
          {showButtonText}
        </button>
      )
    }

    return (
      <button
        className="float-button bg-gray-500 hover:text-blue-200 font-semibold text-white py-2 px-4 border border-transparent rounded font-bold"
        onClick={toggleShowProfile}
      >
        {hideButtonText}
      </button>
    )
  }

  const renderChildren = () => {
    if (!showProfile) {
      return ''
    }

    return children
  }
  
  return (
    <div className="photo-card-wrap rounded overflow-hidden">
      <div className={showOverlay()}>
        {renderChildren()}
      </div>
      <img className="back-img h-full w-auto" src={`${process.env.PUBLIC_URL}/img/${src}`} alt={alt} />
      {renderToggleButton()}
    </div>
  )
}