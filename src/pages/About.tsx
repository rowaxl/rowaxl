import React, { useState, useEffect } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import { Container } from '../components/Container'
import { PhotoCard } from '../components/PhotoCard'
import { SkillList } from '../components/SkillList'

type SkillItem = {
  title: string,
  iconSrc: string,
  iconAlt: string,
  count: number
}


const skillLists: SkillItem[] = [
  {
    title: 'Javascript',
    iconSrc: 'javascript.png',
    iconAlt: 'logo of javascript',
    count: 17
  },
  {
    title: 'Typescript',
    iconSrc: 'typescript.svg',
    iconAlt: 'logo of typescript',
    count: 4
  },
  {
    title: 'React',
    iconSrc: 'react.svg',
    iconAlt: 'logo of react',
    count: 21
  },
  {
    title: 'Vue.js',
    iconSrc: 'vue.svg',
    iconAlt: 'logo of vue.js',
    count: 5
  },
  {
    title: 'Redux / Vuex',
    iconSrc: 'redux.png',
    iconAlt: 'logo of redux',
    count: 10
  },
  {
    title: 'Material-UI',
    iconSrc: 'mui.svg',
    iconAlt: 'logo of material ui',
    count: 6
  },
  {
    title: 'Progressive Web Application',
    iconSrc: 'pwa.png',
    iconAlt: 'logo of pwa',
    count: 3
  },
  {
    title: 'Node.js',
    iconSrc: 'nodejs.svg',
    iconAlt: 'logo of node.js',
    count: 6
  }
]

export default () => {
  // eslint-disable-next-line
  const [skills, setSkills] = useState<SkillItem[]>([])

  useEffect(() => {
    const renderSkillsets = () => {
      if (skillLists.length < 1) return

      setSkills(skills.concat(skillLists.shift() as SkillItem))
    }

    const interval = setInterval(renderSkillsets, 300)

    return () => clearInterval(interval)
  }, [skills])

  return (
    <Container>
      <p className="page-title text-4xl mx-12">
        About me
      </p>

      <div className="flex flex-wrap m-12 about-col-wrap">
        <div className="w-full md:w-1/2 px-6">
          <PhotoCard
            src={`${process.env.PUBLIC_URL}/img/about.png`}
            alt="profile"
            showButtonText="Show My Story"
            hideButtonText="Hide Details"
          >
            <h5>
              Started career as web developer in Tokyo, Japan.
            </h5>
            <h5>
              3 years of experience in javascript development.
            </h5>
            <h5>
              Currently based on Vancouver, Canada.
            </h5>
            <h5>
              Experience: MERN stacks with AWS / Azure
            </h5>
            <h5>
              Values: Self-learning, resiliency, and deligent.
            </h5>
          </PhotoCard>
        </div>
        
        <div className="w-full md:w-1/2 px-6 bg-gray-100 rounded">
          <div className="border-l-4 border-blue-600 -ml-6 pl-6 flex items-center justify-between my-4">
              <p className="text-2xl font-semibold text-gray-800">Skill Set</p>
          </div>
          <hr className="mx-auto" />
          <TransitionGroup>
                {
                skills.map(s =>
                  <CSSTransition
                    classNames="skills-slide"
                    timeout={500}
                    in={true}
                    
                    key={s.title}>
                      <SkillList
                        skillLabel={s.title}
                        iconSrc={s.iconSrc}
                        iconAlt={s.iconAlt}
                        projectCount={s.count}
                      />
                  </CSSTransition>
                )}
          </TransitionGroup>
        </div>
      </div>
    </Container>
  )
}
