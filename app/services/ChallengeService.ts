import axios from 'axios'
import { APIResponse } from '../dtos/Generic'

export interface IChallengeService {
  getChallenge: (userId: string) => Promise<APIResponse<true/* <-- Please change api response dto here  */>>
  // auto-interface
}

class ChallengeService implements IChallengeService {
  getChallenge = (userId: string): Promise<APIResponse<true>> => {
    return axios({
      url: `/challenge/user/${userId}`,
      method: 'GET',
    })
      .then(response => response.data)
      .catch(error => Promise.reject(error))
  }

  // auto-method
}

export default new ChallengeService()
