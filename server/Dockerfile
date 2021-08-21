FROM denoland/deno:1.13.1

EXPOSE 8000

# WORKDIR /app

# Cache the dependencies as a layer (the following two steps are re-run only when deps.ts is modified).
# Ideally cache deps.ts will download and compile _all_ external files used in main.ts.
# COPY deps.ts .
# RUN deno cache deps.ts

# These steps will be re-run upon each file change in your working directory:
# ADD . .

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .

USER deno

# Compile the main app so that it doesn't need to be compiled each startup/entry.
# RUN deno cache deps.ts
# RUN deno cache app.ts

CMD ["run", "--unstable", "--watch", "--allow-read", "--allow-net", "app.ts"]
