import React, { useState, ChangeEvent, MouseEvent, useCallback } from 'react';

import { Container } from '../components/Container'
import { ConfirmModal } from '../components/ConfrimModal'
import { validate } from '../libs/utils'
import { sendEmail } from '../libs/email'

type SNSType = {
  type: string,
  img: string,
  value: string,
  href: string
}

type ContactForm = {
  fullName: string,
  emailAddress: string,
  description: string,
}

type ModalProps = {
  title: string,
  onAction: null | ((event: MouseEvent<HTMLButtonElement>) => void)
}

const initialFormData: ContactForm = {
  fullName: '',
  emailAddress: '',
  description: ''
}

const initialFormValid = {
  fullName: true,
  emailAddress: true,
  description: true,
}

const placeholder = {
  'fullName': 'John Doe',
  'emailAddress': 'this.for-reply@email.com',
  'description': 'Howdy there!'
}

const label = {
  'fullName': <label className="block uppercase text-gray-700 text-xs font-bold mb-2">full name</label>,
  'emailAddress': <label className="block uppercase text-gray-700 text-xs font-bold mb-2">e-mail address</label>,
  'description': <label className="block uppercase text-gray-700 text-xs font-bold mb-2">description</label>,
}

const snsList: SNSType[] = [
  {
    type: 'linkedin',
    img: 'linkedIn.png',
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
  const [formData, setFormData] = useState<ContactForm>(initialFormData)
  const [formValid, setFormValid] = useState(initialFormValid)
  const updateValid = useCallback((newValid) => {
    setFormValid({
      ...formValid, ...newValid
    })
  }, [formValid, setFormValid])


  const [showModal, setShowModal] = useState(false)

  const closeModal = () => {
    setShowModal(false)
  }

  const handleSendEmail = async (event: MouseEvent) => {
    event.preventDefault()

    setShowModal(false)

    const sendResult = await sendEmail(formData)

    if (!sendResult) {
      setModalProps({
        title: 'Failed to send e-mail. Try again later!',
        onAction: null,
      })

      setShowModal(true)

      return
    }

    resetContactForm()

    setModalProps({
      title: 'Success to send e-mail!',
      onAction: null,
    })

    setShowModal(true)
  }

  const [modalProps, setModalProps] = useState<ModalProps>({
    title: '',
    onAction: handleSendEmail
  })

  const openConfirmModal = () => {
    setModalProps({
      title: 'Are you sure to send the e-mail?',
      onAction: handleSendEmail
    })

    setShowModal(true)
  }

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

  const renderErrorMessage = (type: keyof ContactForm) => {
    if (formValid[type])
      return

    let message = 'Please enter valid '

    switch (type) {
      case 'fullName':
        message += 'full name'
        break;
      case 'emailAddress':
        message += 'e-mail address'
        break
      case 'description':
        message += 'description'
        break
    }

    return (
      <p className="text-red-600 mb-4">{message}</p>
    )
  }

  const renderForm = (type: keyof ContactForm) => {
    let onChange

    switch (type) {
      case 'fullName':
        onChange = onChangeName
        break
      case 'emailAddress':
        onChange = onChangeEmail
        break
      default:
        onChange = null
    }

    if (!onChange) {
      return
    }

    return (
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        {label[type]}
        <input
          className={"appearance-none block w-full text-gray-900 border rounded w-full mr-3 py-2 px-2 leading-tight focus:outline-none focus:outline-none focus:bg-white " + isValid(type)}
          type="text"
          onChange={onChange}
          placeholder={placeholder[type]}
        />

        {renderErrorMessage(type)}
      </div>
    )
  }

  const renderDescriptionForm = () => (
    <div className="flex flex-wrap mb-6">
      {label['description']}
      <textarea
        className={"contact-description w-full p-4 border rounded focus:bg-white " + isValid('description')}
        rows={8}
        placeholder={placeholder['description']}
        onChange={onChangeDescription}
      />

      {renderErrorMessage('description')}
    </div>
  )

  const isValid = (type: keyof ContactForm) => formValid[type] ? 'bg-blue-100 border-blue-600' : 'bg-red-200 border-red-600 error'

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value

    setFormData({
      ...formData,
      'emailAddress': input,
    })

    updateValid({
      emailAddress: validate('emailAddress', input)
    })
  }

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value

    setFormData({
      ...formData,
      'fullName': input
    })

    updateValid({
      fullName: validate('fullName', input)
    })
  }

  const onChangeDescription = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const input = event.target.value

    setFormData({
      ...formData,
      'description': input,
    })

    updateValid({
      description: validate('description', input)
    })
  }

  const submitContact = (event: MouseEvent) => {
    event.preventDefault();

    const isFormValid = Object.keys(formData).every(
      (type: string) => {
        if (type === 'fullName' || type === 'emailAddress' || type === 'description') {
          return validate(type, formData[type]) === true
        }

        return false;
      }
    )

    if (!isFormValid) {
      updateValid({
        fullName: validate('fullName', formData['fullName']),
        emailAddress: validate('emailAddress', formData['emailAddress']),
        description: validate('description', formData['description'])
      })
      return
    }

    openConfirmModal()
  }

  const resetContactForm = () => {
    setFormData(initialFormData)
  }

  return (
    <Container>
      <ConfirmModal show={showModal} title={modalProps.title} onAction={modalProps.onAction} onClose={closeModal} />

      <p className="page-title text-4xl mx-12">
        Contact
      </p>

      <div className="flex flex-wrap m-12 about-col-wrap">
        <div className="w-full px-6 bg-gray-200 rounded">
          <form className="w-1/2 mx-auto my-4" onReset={resetContactForm}>
            <p>
              To keep in touch or talk about projects, fill up below form or send me an e-mail to
              <span className="text-grey-600 font-bold">rowaxl0@gmail.com</span>
            </p>
            <div className="flex flex-wrap -mx-3 my-6">  
              {renderForm('fullName')}
              {renderForm('emailAddress')}
            </div>
            {renderDescriptionForm()}
            
            <div className="flex justify-evenly mt-10">
              <button
                className="button-contact-form button-submit bg-blue-500 hover:bg-blue-200 border-blue-500 hover:border-blue-200 text-md border-4 text-white py-1 px-2 rounded"
                type="submit"
                onClick={submitContact}
              >
                Submit
              </button>
              <button
                className="button-contact-form button-clear bg-gray-600 hover:bg-gray-400 border-gray-600 hover:border-gray-400 text-md border-4 text-white py-1 px-2 rounded"
                type="reset"
              >
                Clear
              </button>
            </div>
          </form>

        </div>
        <div className="w-full px-6 bg-gray-100 rounded">
          <p className="text-xl my-4">
            My Social Networks!
          </p>
          {renderSNS()}
        </div>
      </div>
    </Container>
  )
}