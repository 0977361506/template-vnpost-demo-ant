export const getToken = () => {
  return localStorage.getItem('token')
}
export const setToken = (token) => {
  localStorage.setItem('token', token)
}
export const setTokenForOpener = (token) => {
  window.opener.localStorage.setItem('token', token)
}
export const removeToken = () => {
  localStorage.removeItem('token')
}

export const getTokenCodeChallenge = () => {
  return localStorage.getItem('code_challenge')
}
export const setTokenCodeChallenge = (data) => {
  localStorage.setItem('code_challenge', data)
}

export const checkLogin = () => {
  const token = getToken()
  if (!token) return false

  let isLogin
  // nếu save profile thì chỉ check thời hạn token
  // if (getSaveProfile()) {
  // eslint-disable-next-line prefer-const
  isLogin = !isTokenExpired(token)
  // }
  // else {
  /**
   * khi onload đầu tiên sẽ check mảng sessionLogin nếu không có hoặc rỗng sẽ check tg hiện tại
   * nếu tg hiện tại - lastCheckTime >= requiredLoginDistanceTime thì islogin = fail và ngược lại
   * sau đó sẽ thêm một phần tử vào mảng sessionLogin và lưu lại vào localStorage
   * khi unload sẽ xoá đi phần tử đó khỏi mảng sessionLogin
   * và sau đó check mảng sessionLogin rỗng hoặc trống sẽ thêm lastCheckTime
   */

  //     isLogin = isTokenExpired();
  // }

  return isLogin
}

const isTokenExpired = (token) => {
  if (!token) {
    return true
  }
  const tokenParse = parseJwt(token)
  const now = new Date().getTime()
  const expTime = tokenParse.exp
  // exp time is second unit , now is mili-second unit

  if (expTime * 1000 > now) return false

  removeToken()
  return true
}

export const checkPermission = () => {
  return true
}

export const getUserInfo = () => {
  return parseJwt(getToken())
}

const parseJwt = (token) => {
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map(function (c) {
        return `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`
      })
      .join(''),
  )

  return JSON.parse(jsonPayload)
}
