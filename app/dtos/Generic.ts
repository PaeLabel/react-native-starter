export interface Language {
  th: string
  en: string
}

export interface Error {
  code: number
  detail: string
}

export interface APIResponse<S> {
  data: S
  message: 'success' | ''
  errors: Error[]
}
