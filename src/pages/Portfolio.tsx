import React, { useState, useEffect, useCallback } from 'react'
import { Container } from '../components/Container'
import { PhotoCard } from '../components/PhotoCard'
import { Spinner } from '../components/Spinner'
import { getWorks } from '../apis/portfolio'
import Work from '../interface/Work'

export default () => {
  const [works, setWorks] = useState<Work[]>([])

  const getInitialWorks = useCallback(async () => {
    const works = await getWorks()

    if (works.length > 0) setWorks(works)
  }, [])

  useEffect(() => {
    getInitialWorks()
  }, [getInitialWorks])

  const renderWorks = () => {
    if (works.length < 1)
      return (
        <div className="spinner-wrap">
          <Spinner />
        </div>
      )
    
    return works.map(work => (
      <div className="w-full lg:w-1/2 work-card my-4" key={work.title}>
        <p className="text-2xl">
          {work.title}
        </p>

        <PhotoCard
          src={work.preview}
          alt={work.title}
          showButtonText="Show Detail"
          hideButtonText="Hide Detail"
        >
          <h5 className="text-base">
            {work.description}
          </h5>

          <button className="btn-repository text-base">
              <a href={work.repository} target="_blank" rel="noopener noreferrer">Open Repository</a>
          </button>

        </PhotoCard>

        <div className="tag-wrap mt-4">
          {work.tags.map(tag => <div className={`chip`} key={tag}>{tag}</div>)}
        </div>
      </div>
    ))
  }

  return (
    <Container>
      <p className="page-title text-4xl mx-12">
        Portfolio
      </p>

      <div className="work-wrap">
        <div className="flex flex-wrap justify-between">
          {renderWorks()}
        </div>
      </div>
    </Container>
  )
}