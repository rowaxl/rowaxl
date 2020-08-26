import React, { FunctionComponent, useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import LazyLoad from 'react-lazyload'

type LazyLoadImageProps = {
  src: string,
  alt: string,
  className?: string
}

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: inherit;
`;

const loadingAnimation = keyframes`
  0% {
    background-color: #fff;
  }
  50% {
    background-color: #ccc;
  }
  100% {
    background-color: #eee;
  }
`

const Placeholder = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  animation: ${loadingAnimation} 1s infinite;
`;

const StyledImage = styled.img`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const LazyLoadingImage: FunctionComponent<LazyLoadImageProps> = ({ src, alt, className }) => {
  const refPlaceholder = useRef<HTMLDivElement>(null)

  const removePlaceholder = () => {
    refPlaceholder.current?.remove()
  }

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.log(e)
    removePlaceholder()
  }

  console.log(src)

  return (
    <ImageWrapper className={className}>
      <Placeholder ref={refPlaceholder} />
      <LazyLoad>
        <StyledImage
          onLoad={removePlaceholder}
          onError={handleError}
          src={src}
          alt={alt}
        />
      </LazyLoad>
    </ImageWrapper>
  )
}