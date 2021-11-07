import {Error} from './Generic'

export interface ChallengeDTO {
  data: {}
  isLoading: boolean
  errors: Error[]
}

export interface ChallengeStateDTO {
  challenge: ChallengeDTO 
}
