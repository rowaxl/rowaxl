import React from 'react'
import { Container } from '../components/Container'
import { PhotoCard } from '../components/PhotoCard'

export default () => {
  return (
    <Container>
      <p className="text-4xl mx-4">
        About Walther Kim
      </p>

      <div className="grid grid-cols-2 gap-4 m-4 about-col-wrap">
        <div className="col-auto">
          <PhotoCard
            src="about.png"
            alt="profile"
            showButtonText="Show My Story"
            hideButtonText="Hide Details"
          >
            <h5>
              Started career in Tokyo, Japan 3 years.
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
        
        <div className="col-auto">
          <h3>Skills</h3>
          <p>Javascript</p>
          <p>React</p>
          <p>Vue.js</p>
          <p>Redux / Vuex</p>
          <p>SPA</p>
          <p>PWA</p>
          <p>SCSS</p>
          <p>Node.js</p>
        </div>
      </div>
    </Container>
  )
}