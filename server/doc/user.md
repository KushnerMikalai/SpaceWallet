## USERS

```bash
$ curl -H "Content-Type: application/json" \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJkZW5vX2FwaSIsInR5cGUiOiJhY2Nlc3MiLCJpZCI6MSwibmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5pbyIsInJvbGVzIjoiQWRtaW4iLCJleHAiOjE2MjYyOTU0MzR9.tm1ha0lWekIGHEjWEf7H8TL0m-moMVb1II2JbbtPy4k" \
-X GET http://localhost:8000/users
```

## USER ONE (id)

```bash
$ curl -H "Content-Type: application/json" \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJkZW5vX2FwaSIsInR5cGUiOiJhY2Nlc3MiLCJpZCI6MSwibmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5pbyIsInJvbGVzIjoiQWRtaW4iLCJleHAiOjE2MjYyOTU0MzR9.tm1ha0lWekIGHEjWEf7H8TL0m-moMVb1II2JbbtPy4k" \
-X GET http://localhost:8000/users/1
```

# USER EDIT

PUT {{url}}:{{port}}/users/5 HTTP/1.1 content-type: application/json
Authorization: Bearer {{token}}

{ "name": "admin", "email": "admin@admin.io" }

### 
