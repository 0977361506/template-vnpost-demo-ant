const env = process.env || {}

const keys = ['baseApiUrl']

const environmentVal = {}

keys.forEach((key) => {
  environmentVal[key] = env[`REACT_APP_${key}`]
})

export default {
  ...environmentVal,
  requestTimeout: 2, // minutes
  timeoutInterval: 1000, // 1s
}
