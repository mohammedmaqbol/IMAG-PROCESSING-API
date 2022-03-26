# Image Processing API

---

Image processing API, uses query parameters to serve resize images.

## parameters

| Parameters |                             |          |
| ---------- | --------------------------- | -------- |
| name   | any image name listed below | required |
| width      | set any image width         | optional |
| height     | set any image height        | optional |

## Getting started

---

1. Clone this repository git clone.
2. Cd into project directory Udacity-Image-Processing-API
3. Install dependencies `npm install`
4. Build application `npm run build`
5. Start server `node build/app.js`
6. Use `http://localhost:3000/`
7. Use To Resize http://localhost:3000/images/?name=img2&width=1000&height=1100`

## Available Script:

### Run server

`npm run start`

### Build application

`npm run build`

### Build with TypeScript and run all Tests

`npm run test`

### Run jasmine tests

`npm run jasmine`

### Format code and run linter

`npm run format`

---

## Dependencies

    - [NodeJS](https://nodejs.org/en/)
    - [ExpressJS](https://expressjs.com/)
    - [Sharp](https://www.npmjs.com/package/sharp)
    - [TypeScript](https://www.typescriptlang.org/)

---

# Resources useful links

    - [Node Docs](https://nodejs.org/api/fs.html)
    - [TypeScript Docs](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
    - [Prettier Docs](https://prettier.io/)
    - [Sharp NPM](https://www.npmjs.com/package/sharp)
