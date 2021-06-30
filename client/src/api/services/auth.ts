import HttpClient from '../httpClient.ts'

class AuthApiProtected extends HttpClient {
    public constructor() {
        super('http://localhost:8000');

        this._initializeRequestInterceptor();
    }

    private _initializeRequestInterceptor = () => {
        this.instance.interceptors.request.use(
            this._handleRequest,
            this._handleError,
        );
    };

    // private _handleRequest = (config: AxiosRequestConfig) => {
    //     config.headers['Authorization'] = 'Bearer ...';
    //     return config;
    // };

    public login = (body) => this.instance.post('/login', body);
    public register = (body) => this.instance.post('/register', body);
}

export default AuthApiProtected
