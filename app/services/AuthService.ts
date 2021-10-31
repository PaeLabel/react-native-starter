import axios from 'axios'
import { APIResponse } from '../dtos/Generic'

export interface IAuthService {
  getAuth: () => Promise<
    APIResponse<true /* <-- Please change api response dto here  */>
  >
  // auto-interface
}

class AuthService implements IAuthService {
  getAuth = (): Promise<APIResponse<true>> => {
    return axios({
      url: `/auth`,
      method: 'GET',
    })
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  }

  authLogin = (email: string, password: string): Promise<APIResponse<true>> => {
    const data = { email: email, password: password }

    return axios({
      url: `/auth/login`,
      method: 'POST',
      data: data
    })
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  }

  refreshToken = (refresh_token: string): Promise<any> => {
    const data = { refreshToken: refresh_token }
    return axios({
      url: `/auth/refreshtoken`,
      method: 'POST',
      data: data
    })
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  }
  // auto-method
}

export default new AuthService()
