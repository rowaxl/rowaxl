import React from 'react'
import { Container } from '../components/Container'
import { PhotoCard } from '../components/PhotoCard'
import { SkillList } from '../components/SkillList'

type SkillItem = {
  title: string,
  iconSrc: string,
  iconAlt: string
}


const skillLists: SkillItem[] = [
  {
    title: 'Javascript',
    iconSrc: 'javascript.png',
    iconAlt: 'logo of javascript',
  },
  {
    title: 'Typescript',
    iconSrc: 'typescript.svg',
    iconAlt: 'logo of typescript',
  },
  {
    title: 'React',
    iconSrc: 'react.svg',
    iconAlt: 'logo of react'
  },
  {
    title: 'Next.js',
    iconSrc: 'vercel.svg',
    iconAlt: 'logo of next.js',
  },
  {
    title: 'Redux',
    iconSrc: 'redux.png',
    iconAlt: 'logo of redux',
  },
  {
    title: 'Material-UI',
    iconSrc: 'mui.svg',
    iconAlt: 'logo of material ui',
  },
  {
    title: 'Tailwind CSS',
    iconSrc: 'tailwind.png',
    iconAlt: 'logo of tailwindcss',
  },
  {
    title: 'Progressive Web Application',
    iconSrc: 'pwa.png',
    iconAlt: 'logo of pwa',
  },
  {
    title: 'Node.js',
    iconSrc: 'nodejs.svg',
    iconAlt: 'logo of node.js',
  }
]

const AboutPage = () => {
  return (
    <Container>
      <div className="border-l-4 border-blue-600 pl-6 mx-4 md:mx-12 flex items-center justify-between my-4">
        <p className="text-2xl font-semibold md:text-4xl w-full dark:text-gray-100">
          About Me: Wonjae Kim
        </p>
      </div>

      <div className="flex flex-wrap m-4 md:m-auto about-col-wrap">
        <div className="w-full md:w-1/2 md:px-6">
          <PhotoCard
            src={`${process.env.PUBLIC_URL}/img/about.jpg`}
            alt="profile"
            showButtonText="Show My Story"
            hideButtonText="Hide Details"
          >
            <h5>
              Started career as web developer in Tokyo, Japan.
            </h5>
            <h5>
              3+ years of experience in javascript development.
            </h5>
            <h5>
              Currently based on Vancouver, Canada.
            </h5>
            <h5>
              Developing MERN stacks applications
            </h5>
            <h5>
              With Cloud SaaSs: AWS / Azure / Firebase
            </h5>
            <h5>
              Values: Self-learning, resiliency, and deligent.
            </h5>
          </PhotoCard>
        </div>
        
        <div className="w-full md:w-1/2 px-6 bg-gray-100 dark:bg-gray-700 rounded">
          <div className="border-l-4 border-blue-600 -ml-6 pl-6 flex items-center justify-between my-4">
            <p className="text-2xl text-gray-800 dark:text-gray-200">
              Skill Set
            </p>
          </div>
          <hr className="mx-auto" />

          <div className="skills-wrap">
            {skillLists.map(s =>
              <SkillList
                key={s.title}
                skillLabel={s.title}
                iconSrc={s.iconSrc}
                iconAlt={s.iconAlt}
              />)
            }
          </div>
        </div>
      </div>
    </Container>
  )
}

export default AboutPage
