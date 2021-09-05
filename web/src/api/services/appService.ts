import { get } from '../apiClient'

const appService = {
  app: async () => await get('app', '', null),
}

export default appService
