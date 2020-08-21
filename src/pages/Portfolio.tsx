import React from 'react'
import { Container } from '../components/Container'
import { PhotoCard } from '../components/PhotoCard'

const works = [
  {
    preview: 'business.jpg',
    title: 'work 1',
    description: 'web based some application',
    repository: 'www.github.com/rowaxl/',
    tags: ['Javascript', 'React', 'Typescript', 'Redux', 'Node.js', 'Material-UI', 'PWA']
  },
  {
    preview: 'business.jpg',
    title: 'work 2',
    description: 'web based some application',
    repository: 'www.github.com/rowaxl/',
    tags: ['Javascript', 'React', 'Typescript', 'Redux', 'Node.js', 'Material-UI', 'PWA']
  },
  {
    preview: 'business.jpg',
    title: 'work 3',
    description: 'web based some application',
    repository: 'www.github.com/rowaxl/',
    tags: ['Javascript', 'React', 'Typescript', 'Redux', 'Node.js', 'Material-UI', 'PWA']
  },
  {
    preview: 'business.jpg',
    title: 'work 4',
    description: 'web based some application',
    repository: 'www.github.com/rowaxl/',
    tags: ['Javascript', 'React', 'Typescript', 'Redux', 'Node.js', 'Material-UI', 'PWA']
  }
]

export default () => {
  const renderWorks = () => works.map(work => (
    <div className="w-full lg:w-1/2 work-card" key={work.title}>
      <PhotoCard
        src={work.preview}
        alt={work.title}
        showButtonText="Show Detail"
        hideButtonText="Hide Detail"
      >
        <p className="text-2xl">
          {work.description}
        </p>

        <p className="text-xl">
          <a href={work.repository}>Repository</a>
        </p>

      </PhotoCard>
      
      <p className="text-2xl">
        {work.title}
      </p>
      
      <div className="tag-wrap">
        {work.tags.map(tag => <div className={`chip`} key={tag}>{tag}</div>)}
      </div>
    </div>
  ))

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