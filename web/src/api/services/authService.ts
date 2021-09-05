import { get, post } from '../apiClient'

const authService = {
  checkTokens: async () => await get('check-tokens', '', null),
  login: async (body: any) => await post('login', '', body, null),
  register: async (body: any) => await post('register', '', body, null),
}

export default authService
