import HttpClient from '../httpClient'

class AuthApiProtected extends HttpClient {
  public constructor() {
    super()
  }

  public login = (body: any) => this.instance.post('/login', body)
  public register = (body: any) => this.instance.post('/register', body)
}

export default AuthApiProtected
