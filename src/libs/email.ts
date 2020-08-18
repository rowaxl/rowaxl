import emailjs from 'emailjs-com'

type ContactFormData = {
  fullName: string,
  emailAddress: string,
  description: string
}

export const sendEmail = async (formData: ContactFormData) => {
  const userId = process.env['REACT_APP_EMAIL_USER_ID'] ? process.env['REACT_APP_EMAIL_USER_ID'] : ''
  const sendResult = await emailjs.send(
    'gmail',
    'template_k7yQM98w',
    {
      from_name: formData.fullName,
      reply_to: formData.emailAddress,
      description: formData.description
    },
    userId
  ).catch(err => {
    console.error(err)
    return false
  })

  if (sendResult) {
    return true;
  }
}