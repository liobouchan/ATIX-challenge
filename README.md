# ATIX LABS \_

## Technical Challenge - Leonardo Bouchan

## Tech

- Typescript
- NodeJs
- Morgan
- Jest
- Nodemon

## Installation

Requires NodeJS, i use v16.13.0 to develop this test.

Install the dependencies and devDependencies and start the server.

```sh
cd api-challenge
npm i
npm run dev
```

## Testing

Unit testing are on /source/helpers/hashes.test.ts

```sh
npm test
```

POSTMAN

1. POST http://localhost:6060/posts/ 2. Body 3. Raw
   ` { "body": "Chau Mundo" }`

Expected result
`{ "generated_message": { "newHash": "00232c7d3c2283695a4029eddc1b9e8c83914515832a04f57b402fc444aa11b5", "prevhash": "0038711c83bd05b1e369e27246df4ba815a6dda04116b1b2f9a8c21ba4e1de38", "message": "Chau Mundo", "nonce": 71 } }`

![PostMan Testing](image.png)
