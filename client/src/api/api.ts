import authService from './services/authService'
import userService from './services/userService'

const api = {
  auth: new authService(),
  user: new userService()
}

export default api
