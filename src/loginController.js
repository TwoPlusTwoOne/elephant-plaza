const _username = 'bambi'

let _password = '12/08/18'

export const login = (username, password) => {
  return username && (username.toLowerCase() === _username) && password === _password
}