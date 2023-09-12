export type LoginDataType = {
  password: string
  email: string
  rememberMe?: boolean
}

export type AuthMeData = {
  email: string
  name: string
  id: string
  isEmailVerified: boolean
  avatar: null | string
  created: string
  updated: string
}
