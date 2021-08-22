import HttpClient from '../httpClient'

export class AppApiProtected extends HttpClient {
  public constructor() {
    super()
  }

  public appData = () => this.instance.get('/app')
}
