# Server Deno
 - Deno
 - MySQL
 - Adminer
 - Docker


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
```bash
deno run -A --unstable https://deno.land/x/nessie/cli.ts make:migration NAME_MIGRATE
```

```bash
$ deno run -A --unstable https://deno.land/x/nessie/cli.ts migrate
$ deno run -A --unstable https://deno.land/x/nessie/cli.ts seed
```

## Backup
docker exec CONTAINER /usr/bin/mysqldump -u root --password=root DATABASE > backup.sql

## Restore
cat backup.sql | docker exec -i CONTAINER /usr/bin/mysql -u root --password=root DATABASE

```bash
$ docker exec server_db_1 /usr/bin/mysqldump -u root --password=example deno_api_db > backup.sql
$ cat backup.sql | docker exec -i server_db_1 /usr/bin/mysql -u root --password=example deno_api_db
```
