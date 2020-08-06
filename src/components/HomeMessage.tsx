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

type Targets = 'community' | 'business' | 'you'

const weLabels: MessageLabels[] = [
  { text: 'we', colorClass: 'community' },
  { text: 'we', colorClass: 'business' },
  { text: 'we', colorClass: 'you' },
]

const targetLabels: MessageLabels[] = [
  { text: 'community', colorClass: 'community' },
  { text: 'bussiness', colorClass: 'business' },
  { text: 'you', colorClass: 'you' },
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
  'you': {
    file: 'you.jpg',
    photoby: {
      name: 'Austin Schmid',
      url: 'https://unsplash.com/@schmidy'
    }
  }
}

const targets:Targets[] = ['community', 'business', 'you']
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
      <div className="greeting-message">
        <h1>Hello,  My name is Wonjae Kim!</h1>
        <h3>I'm a web developer!</h3>
      </div>

      <TransitionGroup>
        <CSSTransition
          classNames="slide"
          timeout={{ enter: 3000, exit: 3000 }}
          key={imageDetail.file}
        >
          <img src={require('../assets/img/' + imageDetail.file)} className="home-image" alt={imageDetail.file} />
        </CSSTransition>
      </TransitionGroup>

      <div className="message-wrap">
        <h1>What {renderTargets(weLabels)}B can do for {renderTargets(targetLabels)}{" "} ?</h1>
        <h3>Let me help to find the solution!</h3>
      </div>

      
    </div>
  )
}