import authService from './services/authService'
import userService from './services/userService'
import { AppApiProtected as appService } from './services/appService'

const api = {
  auth: new authService(),
  user: new userService(),
  app: new appService(),
}

export default api
