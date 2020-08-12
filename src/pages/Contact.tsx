import React from 'react';
import { Container } from '../components/Container'

type ContactType = {
  type: string,
  img: string,
  value: string,
  href: string
}

const snsList: ContactType[] = [
  {
    type: 'linkedin',
    img: 'linkedin.png',
    value: 'LinkedIn',
    href: 'https://www.linkedin.com/in/wonjae-kim-953194173/'
  },
  {
    type: 'github',
    img: 'github.png',
    value: 'Git Hub',
    href: 'https://github.com/rowaxl/'
  },
  {
    type: 'twitter',
    img: 'twitter.png',
    value: 'Twitter',
    href: 'https://twitter.com/rowaxl0'
  }
]

export default () => {
  const renderSNS = () => snsList.map(contact =>
    <button className={`button-sns ${contact.type} mx-4 py-2 px-4 rounded`} key={contact.type}>
      <a className="font-bold text-white inline-flex items-center" href={contact.href} target="_blank" rel="noopener noreferrer">
        <img className="w-8 h-8 mr-2" src={`${process.env.PUBLIC_URL}/img/${contact.img}`} alt={contact.type} />
        <span>
          {contact.value}
        </span>
      </a>
    </button>
  )

  return (
    <Container>
      <p className="text-4xl mx-12">
        Contact
      </p>

      <div className="flex flex-wrap m-12 about-col-wrap">
        <div className="w-full px-6 bg-gray-100 rounded">
          <form>
            <label>If you want to just keep in touch, talk about project, fill up below form ans send or Email to rowaxl0@gmail.com </label>
            <input type="text" />
          </form>
        </div>
        <div className="w-full px-6 bg-gray-100 rounded">
          <p className="text-xl my-4">
            Connection in social
          </p>
          {renderSNS()}
        </div>
      </div>
    </Container>
  )
}