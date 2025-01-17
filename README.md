# React + TypeScript + Vite

Install NPM dependencies:

```sh
yarn install
```

Build assets:

```sh
yarn run dev
```

Setup configuration:

```sh
cp .env.example .env
```

- **Username:** johndoe@example.com
- **Password:** secret
  
Build the Docker image

```sh
docker build -t react-ts-app .
```

Run Docker container

```sh
docker run -p 3000:80 react-ts-app
```

