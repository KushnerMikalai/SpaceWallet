import HttpClient from '../httpClient'

class UserApiProtected extends HttpClient {
  public constructor() {
    super()
  }

  public getOne = (body: any) => this.instance.get(`/users/${body.id}`)
}

export default UserApiProtected
