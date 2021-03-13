import React, { FunctionComponent, useState } from 'react'
import { LazyLoadingImage } from './LazyLoadImage'

type PhotoCardProps = {
  src: string,
  alt: string,
  showButtonText: string,
  hideButtonText: string,
}

export const PhotoCard: FunctionComponent<PhotoCardProps> =
  ({ src, alt, showButtonText, hideButtonText, children }) => {

    console.log({ src })

  const [showChildren, setShowChildren] = useState(false)
  const toggleShowChildren = () => setShowChildren(!showChildren)

  const showOverlay = () => "overlay " + (showChildren ? "show" : "hide")

  const renderToggleButton = () => {
    if (!showChildren) {
      return (
        <button
          className="float-button hover:bg-transparent bg-blue-500 hover:text-blue-200 font-semibold text-white py-2 px-4 border hover:border-blue-200 border-transparent rounded font-bold"
          onClick={toggleShowChildren}
        >
          {showButtonText}
        </button>
      )
    }

    return (
      <button
        className="float-button bg-gray-500 hover:text-blue-200 font-semibold text-white py-2 px-4 border border-transparent rounded font-bold"
        onClick={toggleShowChildren}
      >
        {hideButtonText}
      </button>
    )
  }

  const renderChildren = () => {
    if (!showChildren) {
      return ''
    }

    return children
  }
  
  return (
    <div className="photo-card-wrap rounded overflow-hidden">
      <div className={showOverlay()}>
        {renderChildren()}
      </div>

      <LazyLoadingImage className="back-img" src={src} alt={alt} />
      {renderToggleButton()}
    </div>
  )
}