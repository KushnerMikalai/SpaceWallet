import HttpClient from '../httpClient'

export class AuthApiProtected extends HttpClient {
  public constructor() {
    super()
  }
  public login = (body: any) => this.instance.post('/login', body)
  public register = (body: any) => this.instance.post('/register', body)
  public checkTokens = () => this.instance.get('/check-tokens')
}
