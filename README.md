# App


## Server Deno
For Docker: Up docker-compose, this will create a docker container with the database with the given name in env.
```
$ docker-compose up --build
```

### API

Browse API at http://localhost:8000
Browse (for Docker only) DB Adminer at http://localhost:8080
Browse Swagger Open API Doc at http://localhost:8105


### DB
make migrate
```
deno run -A --unstable https://deno.land/x/nessie/cli.ts make:migration NAME_MIGRATE
```

```
$ deno run -A --unstable https://deno.land/x/nessie/cli.ts migrate
$ deno run -A --unstable https://deno.land/x/nessie/cli.ts seed
```
