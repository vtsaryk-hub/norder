const validation_messages: { [key: string]: {[key: string]: string} } = {
  'displayName': {
    'required': 'Display name is required',
    'minlength': 'Display name must be at least 2 characters long',
   // 'maxlength': 'Display name cannot be more than 25 characters long',
    'pattern': 'Your name must contain only numbers and letters',
  //  'validUsername': 'Your username has already been taken'
  },
  'email': {
    'required': 'Email is required',
    'pattern': 'Enter a valid email'
  },
  'password': {
    'required': 'Password is required',
    'minlength': 'Password must be at least 8 characters long',
    'maxlength': 'Password cannot be more than 25 characters long',
    'pattern': 'Your password must contain at least one uppercase, one lowercase, and one number'
  },
  'confirmPassword': {
    'required': 'Confirm password is required',
    'notEquals': 'Password mismatch'
  }
}

export function getValidationMessages(inputName: string) {
  return validation_messages[inputName] || {}
}
