# App

* Server (Docker)
    * Deno (TypeScript)
    * MySQL
    * Adminer
* Client
    * Vite
    * Vue (TypeScript)


## Environment:
* Deno - 1.13.1
* Node - 14.15.4
* NPM - 7.17.0


## Server Deno
 - Deno
 - MySQL
 - Adminer
 - Docker

> Before PUSH you need run $ deno fmt
> _To work go to the folder **server**_

### RUN DENO SERVER
```bash
deno run --unstable --watch --allow-read --allow-net app.ts
```

### DOCKER
For Docker: Up docker-compose, this will create a docker container with the database with the given name in env.
```bash
$ docker-compose up --build
or
$ docker-compose up -d
```

### RUN ONLY DB DOCKER
Go to server folder and run:
```bush
docker-compose -f docker-compose.db.yml up -d
```

### API
Browse API at http://localhost:8000
Browse (for Docker only) DB Adminer at http://localhost:8080
Browse Swagger Open API Doc at http://localhost:8105

### DB
> for start local db you need restore
> Restore DB:
```bash
$ docker exec -i server_db_1 /usr/bin/mysql -u root --password=example -e 'CREATE DATABASE deno_api_db;'
$ cat local_backup.sql | docker exec -i server_db_1 /usr/bin/mysql -u root --password=example deno_api_db
```

> Backup DB:
```bash
$ docker exec server_db_1 /usr/bin/mysqldump -u root --password=example deno_api_db > local_backup.sql
```
