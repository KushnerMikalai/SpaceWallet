## INFO
```bash
$ curl -X GET http://localhost:8000
```

## REGISTER
```bash
$ curl -d '{"name":"test", "email":"test@test.io", "password":"111111"}' -H "Content-Type: application/json" -X POST http://localhost:8000/register
```

## LOGIN
```bash
$ curl -d '{"email":"admin@admin.io", "password":"111111"}' -H "Content-Type: application/json" -X POST http://localhost:8000/login
```

> {"email":"test@test.io", "password":"111111"}
> {"email":"admin@admin.io","password":"111111"}

## TOKEN
```bash
$ curl -d '{"refresh_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJkZW5vX2FwaSIsInR5cGUiOiJyZWZyZXNoIiwiaWQiOjEsImV4cCI6MTYyOTg4NTkyMn0.1StxSIzOVvBqfQQVnPwmHGRyvYhgXCO2cw00RLWCfZY"}' -H "Content-Type: application/json" -X POST http://localhost:8000/token
```
