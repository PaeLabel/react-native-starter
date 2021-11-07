import axios from 'axios'
import { APIResponse } from '../dtos/Generic'

export interface IUserService {
  getUser: (id: string) => Promise<APIResponse<true/* <-- Please change api response dto here  */>>
  // auto-interface
}

class UserService implements IUserService {
  getUser = (id: string): Promise<APIResponse<true>> => {
    return axios({
      url: `/user/${id}`,
      method: 'GET',
    })
      .then(response => response.data)
      .catch(error => Promise.reject(error))
  }

  // auto-method
}

export default new UserService()
