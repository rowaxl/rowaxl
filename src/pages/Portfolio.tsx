import React from 'react'
import { Container } from '../components/Container'
import { PhotoCard } from '../components/PhotoCard'

const works = [
  {
    preview: 'business.jpg',
    title: 'work name',
    description: 'web based some application',
    repository: 'www.github.com/rowaxl/',
    tags: ['Javascript', 'React', 'Typescript', 'Redux', 'Node.js', 'Material-UI', 'PWA']
  }
]

export default () => {
  const renderWorks = () => works.map(work => (
    <div className="w-1/2 md:w-full work-card" key={work.title}>
      <PhotoCard
        src={work.preview}
        alt={work.title}
        showButtonText="Show Overview"
        hideButtonText="Hide Overview"
      >
        <p className="text-xl">
          {work.title}
        </p>
        <p>
          {work.description}
        </p>

        <p>
          {work.tags.map(tag => <span className={`chip ${tag}`}>{tag}</span>)}
        </p>
      </PhotoCard>
    </div>
  ))

  return (
    <Container>
      <p className="text-4xl mx-12">
        Portfolio
      </p>

      <div className="flex flex-wrap m-12 w-full">
        {renderWorks()}
      </div>
    </Container>
  )
}