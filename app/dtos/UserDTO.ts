import {Error} from './Generic'

export interface UserDTO {
  data: {}
  isLoading: boolean
  errors: Error[]
}

export interface UserStateDTO {
  user: UserDTO 
}
