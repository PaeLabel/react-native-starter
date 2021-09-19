import axios from 'axios'
import {APIResponse} from '../dtos/Generic'

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
  // auto-method
}

export default new AuthService()
