import { AuthApiProtected } from './services/authService'
import { UserApiProtected } from './services/userService'
import { AppApiProtected } from './services/appService'

export const userService = new UserApiProtected()
export const authService = new AuthApiProtected()
export const appService = new AppApiProtected()
