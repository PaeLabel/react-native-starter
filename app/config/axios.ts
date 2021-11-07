import axios from 'axios'
import jwt_decode from 'jwt-decode'
import moment from 'moment'
import AuthActions from '../redux/Actions/AuthActions'
import { getReduxStore } from '../redux/Store'
import { AxiosLogger } from '../utils'
import { getLanguageCode } from '../utils/multiLanguage'
import project from './project'

const disabledAxiosLogger = false // <----------  Change this config to "true" when don't need to view log.
const shouldDisabledAxiosLogger = !__DEV__ || disabledAxiosLogger
const axiosLogger = new AxiosLogger(shouldDisabledAxiosLogger)

axios.defaults.baseURL = project.baseUrl
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.timeout = 1000 * 10
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
  async function (config) {
    config.headers.common['Accept-Language'] = getLanguageCode()
    config.metadata = { startTime: new Date() }
    // Before request is sent
    axiosLogger.logRequestSuccess(config)

    const store = getReduxStore()
    const token = store.getState().AuthState?.auth?.token ?? ""
    const refreshToken = store.getState().AuthState?.auth?.refreshToken ?? ""

    if (token !== undefined && token !== '' && config.url !== '/auth/refreshtoken') {
      const payload: any = jwt_decode(token)

      if (payload.exp < moment().format('X')) {
        // @ts-ignore
        const newToken = await store.dispatch(AuthActions.refreshToken(refreshToken))

        config.headers['Authorization'] = newToken ? `Bearer ${newToken}` : ''
      }
    }

    return config
  },
  function (error) {
    // After request is sent but has some error
    axiosLogger.logRequestFailure(error)
    // Request error
    return Promise.reject(error)
  },
)

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    axiosLogger.logResponseSuccess(response)
    return response
  },
  function (error) {
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

    // if (errorPayload.status == 401) {
    //   if (errorPayload.errors[0].code == "ERR_AUTH_1") {
    //     const dispatch = useDispatch()
    //     dispatch(AuthActions.refreshToken(useSelector(state => state.AuthState.refreshToken)))
    //   }
    // }


    axiosLogger.logResponseFailure(error)
    return Promise.reject(errorPayload)
  },
)
