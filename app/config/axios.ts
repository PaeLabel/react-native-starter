import axios from 'axios'
import { AxiosLogger } from '../utils'
import { getLanguageCode } from '../utils/multiLanguage'
import project from './project'

const disabledAxiosLogger = false // <----------  Change this config to "true" when don't need to view log.
const shouldDisabledAxiosLogger = !__DEV__ || disabledAxiosLogger
const axiosLogger = new AxiosLogger(shouldDisabledAxiosLogger)

axios.defaults.baseURL = project.baseUrl
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.timeout = 1000 * 60
axios.defaults.validateStatus = status => {
  return status >= 200 && status < 300
}

/**
 * Interceptors
 * ----
 * request
 * response
 */

// Add a request interceptor
axios.interceptors.request.use(
  function(config) {
    config.headers.common['Accept-Language'] = getLanguageCode()
    config.metadata = { startTime: new Date()}
    // Before request is sent
    axiosLogger.logRequestSuccess(config)
    return config
  },
  function(error) {
    // After request is sent but has some error
    axiosLogger.logRequestFailure(error)
    // Request error
    return Promise.reject(error)
  },
)

// Add a response interceptor
axios.interceptors.response.use(
  function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    axiosLogger.logResponseSuccess(response)
    return response
  },
  function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    let errorPayload = {
      errors: [],
      message: error.message,
      status: error.status || 400,
    }

    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      errorPayload.status = error.response.status
      errorPayload.errors = error.response?.data?.errors || []
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      errorPayload.status = error.request.status 
      errorPayload.errors = error.response?.data?.errors || []
    } else {
      // Something happened in setting up the request that triggered an Error
      // TODO wait for design structure with backend
    }

    axiosLogger.logResponseFailure(error)
    return Promise.reject(errorPayload)
  },
)
