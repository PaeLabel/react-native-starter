import {Error} from './Generic'

export interface AuthDTO {
  data: {}
  isLoading: boolean
  errors: Error[]
}

export interface AuthStateDTO {
  accessToken: string
}
