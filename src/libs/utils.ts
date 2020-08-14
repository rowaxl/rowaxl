const patterns = {
  'emailAddress': /^\w+[\w\-\\.]*@\w+((-\w+)|(\w*))\.[a-z]{2,4}$/g,
  'fullName': /^([a-zA-Z]+[',.-]?[a-zA-Z ]*)+[ ]?([a-zA-Z]+[',.-]?[a-zA-Z ]+)+$/g,
  'description': /.+/g
}

export const validate = (type: keyof typeof patterns , value: string) => {
  const validatePattern: RegExp = patterns[type]
  validatePattern.lastIndex = 0

  return validatePattern.test(value)
}
