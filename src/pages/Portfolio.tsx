import React, { useState, useEffect, useCallback } from 'react'
import { Container } from '../components/Container'
import { PhotoCard } from '../components/PhotoCard'
import { Spinner } from '../components/Spinner'
import { getWorks } from '../apis/portfolio'
import Work from '../interface/Work'

const PortfolioPage = () => {
  const [works, setWorks] = useState<Work[]>([])

  const getInitialWorks = useCallback(async () => {
    const works = await getWorks()

    if (works.length > 0) setWorks(works)
  }, [])

  useEffect(() => {
    getInitialWorks()
  }, [getInitialWorks])

  const renderWorks = () => {
    if (!works || works.length < 1)
      return (
        <div className="spinner-wrap">
          <Spinner />
        </div>
      )

    return works.map(work => (
      <div className="w-full lg:w-1/2 work-card my-4" key={work.title}>
        <p className="text-2xl dark:text-blue-200">
          {work.title}
        </p>

        <PhotoCard
          src={work.isPreviewInPublic ? `${process.env.PUBLIC_URL}/img/${work.preview}`: work.preview}
          alt={work.title}
          showButtonText="Show Detail"
          hideButtonText="Hide Detail"
        >
          <div className="detail-wrap">
            <h5 className="text-base work-description">
              {work.description}
            </h5>

            {
              work.URL.length > 0 &&
              <button className="btn-url text-base">
                  <a href={work.URL} target="_blank" rel="noopener noreferrer">Live Demo</a>
              </button>
            }

            {
              work.repository.length > 0 &&
              <button className="btn-repository text-base">
                <a href={work.repository} target="_blank" rel="noopener noreferrer">Open Repository</a>
              </button>
            }

          </div>
        </PhotoCard>

        <div className="tag-wrap mt-4">
          {work.tags.map(tag => <div className={`chip`} key={tag}>{tag}</div>)}
        </div>
      </div>
    ))
  }

  return (
    <Container>
      <div className="border-l-4 border-blue-600 pl-6 mx-4 mt-4 md:mx-12 flex items-center justify-between my-4">
        <p className="text-2xl font-semibold md:text-4xl w-full dark:text-gray-100">
          Works
        </p>
      </div>

      <div className="work-wrap shadow-inner">
        <div className="flex flex-wrap justify-between">
          {renderWorks()}
        </div>
      </div>
    </Container>
  )
}

export default PortfolioPage
