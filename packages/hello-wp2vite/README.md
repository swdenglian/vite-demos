# TypeScript, Vue full-stack JS Boilerplate

This is a full stack webapp boilerplate project with TypeScript + VueJS + Webpack.

## Usage
Install dependencies
```shell
$ npm install
```
For development

```shell
$ npm run start:client
$ npm run start:server
```

For production

```shell
$ npm run prod
```

## Features
**Server-side**

* [x] NodeJS
* [x] NestJS
* [x] logging/tracing/metric

**Client-side**
* [x] VueJS 2.X
* [x] Vue-router
* [x] Vuex
* [x] Webpack 4
* [x] Babel

## Directory structure
```txt
.
|-- config               # frontend build configuration
|   |-- devServer.ts
|   |-- webpack.config.common.js
|   |-- webpack.config.dev.js
|   `-- webpack.config.prod.js
|-- src
|   |-- client          # froned code
|   |   |-- components
|   |   |   |-- HelloWorld.vue
|   |   |   `-- HelloWorld.ts
|   |   |-- router
|   |   |   `-- index.ts
|   |   |-- store
|   |   |   `-- index.ts
|   |   |-- App.vue
|   |   |-- index.html
|   |   |-- main.ts
|   |   |-- shims-tsx.d.ts
|   |   |-- shims-vue.d.ts
|   |   `-- tsconfig.json
|   `-- server          # server code
|       |-- example
|       |   |-- example.controller.ts
|       |   |-- example.module.ts
|       |   `-- example.service.ts
|       |-- framework
|       |   |-- logging
|       |   |-- metric
|       |   |   `-- metric.module.ts
|       |   `-- tracing
|       |-- app.controller.ts
|       |-- app.module.ts
|       `-- main.ts         # application entry
|-- Dockerfile
|-- Gulpfile.js
|-- Jenkinsfile.js
|-- README.md
|-- babel.config.js
|-- package-lock.json
|-- package.json
|-- tsconfig.json
|-- tslint.json
`-- webpack.config.js
```

## Reference
- https://github.com/microsoft/TypeScript-Vue-Starter
- https://github.com/samteb/vue-2-webpack-4-boilerplate
- https://github.com/vuejs-templates/webpack
- https://github.com/icebob/vue-express-mongo-boilerplate
- [Set data Type in Vue data object with Typescript](https://stackoverflow.com/q/47810218/5204695)
