import React, { FunctionComponent, useState, useEffect, useMemo } from 'react'
import TextLoop from 'react-text-loop'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

type MessageLabels = {
  text: string;
  colorClass: string;
}

type PhotoDetail = {
  file: string,
  photoby: {
    name: string,
    url: string
  }
}

type Targets = 'community' | 'business' | 'us'

const weLabels: MessageLabels[] = [
  { text: 'we', colorClass: 'community' },
  { text: 'we', colorClass: 'business' },
  { text: 'we', colorClass: 'us' },
]

const targetLabels: MessageLabels[] = [
  { text: 'community', colorClass: 'community' },
  { text: 'bussiness', colorClass: 'business' },
  { text: 'us', colorClass: 'us' },
]

const photoes: {[key in Targets]: PhotoDetail } = {
  'community': {
    file: 'community.jpg',
    photoby: {
      name: 'maruo mora',
      url: 'https://unsplash.com/@mauromora'
    }
  },
  'business': {
    file: 'business.jpg',
    photoby: {
      name: 'Carlos Muza',
      url: 'https://unsplash.com/@kmuza'
    }
  },
  'us': {
    file: 'us.jpg',
    photoby: {
      name: 'Austin Schmid',
      url: 'https://unsplash.com/@schmidy'
    }
  }
}

const targets:Targets[] = ['community', 'business', 'us']
let i = 0;

export const HomeMessage: FunctionComponent = () => {
  const [target, setTarget] = useState<Targets>('community')

  useEffect(() => {
    const changeTarget = setInterval(() => {
      if (i >= targets.length - 1) {
        i = 0
      } else {
        i++
      }

      setTarget(targets[i])
    }, 3000)
    return () => clearInterval(changeTarget)
  }, [])

  const renderTargets = (labels: MessageLabels[]) => (
    <TextLoop springConfig={{ stiffness: 150, damping: 30 }} interval={3000}>
      {
        labels.map(label => 
          <span key={label.text} className={`message to-${label.colorClass}`}>{label.text.toUpperCase()}</span>
        )
      }
    </TextLoop>
  )

  const imageDetail: PhotoDetail = useMemo(() => photoes[target], [target])

  return (
    <div className="home-message-wrap">
      <div className="greeting-message bg-gray-100 dark:bg-gray-700 px-6 py-4 bg-opacity-75">
        <h1 className="text-blue-600 dark:text-blue-400">
          Hello, I'm Wonjae Kim.
        </h1>
        <h3 className="text-blue-400 dark:text-blue-200">
          I develop Javascript / Typesciprt web applications!
        </h3>
      </div>

      <TransitionGroup className="bg-transparent">
        <CSSTransition
          classNames="slide"
          timeout={{ enter: 3000, exit: 3000 }}
          key={imageDetail.file}
        >
          <img src={`${process.env.PUBLIC_URL}/img/${imageDetail.file}`} className="home-image" alt={imageDetail.file} />
        </CSSTransition>
      </TransitionGroup>

      <div className="message-wrap bg-gray-100 dark:bg-gray-800 bg-opacity-75 w-full pl-12 py-6">
        <h1 className="dark:text-gray-200">
          What {renderTargets(weLabels)}B can do for {renderTargets(targetLabels)}{" "} ?
        </h1>
        <h3  className="dark:text-gray-200">
          Let me help to find the solution!
        </h3>
      </div>

      
    </div>
  )
}