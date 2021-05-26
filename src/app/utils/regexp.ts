export const displayNameRegExp = /^[\p{L}'][ \p{L}'-]*[\p{L}]$/u;
export const emailRegExp = /^([\p{L}\d\w]+[._-])?[\p{L}\d]{0,}@[\p{L}]{2,}\.[\p{L}]{2,}$/u;
export const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d/,.;!@#$%^&*()_+=\\-]{8,}$/
