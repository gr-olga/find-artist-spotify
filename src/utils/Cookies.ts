export function setToken(token: string, expiresIn: number): void {
  setCookie('token', token, expiresIn)
}

export function removeToken(): void {
  deleteCookie('token')
}

export function getToken(): string {
  return getCookie('token')
}

export function setCookie(
  name: string,
  value: string,
  expiresIn: number
): void {
  let expires = ''
  if (expiresIn) {
    const date = new Date()
    //TODO debug
    date.setTime(date.getTime() + expiresIn * 24 * 60 * 60 * 1000)
    // date.setTime(date.getTime() + expiresIn)
    expires = '; expires=' + date.toUTCString()
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/'
}

function getCookie(name): string {
  let _name = name + '='

  let ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(_name) == 0) {
      return c.substring(_name.length, c.length)
    }
  }
  return ''
}

function deleteCookie(name): void {
  document.cookie = name + '=; Max-Age=-99999999;'
}
