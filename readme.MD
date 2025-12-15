# URL Shortener API 🔗
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)

API para encurtamente de URLs.
Permite gerar links curtos e redirecionar para a URL original.

## Tecnologias Utilizadas

- Node.js
- Express
- Nanoid
- Prisma ORM
- Typescript

## Endpoints

## POST /shortener

{
	"originalUrl": "https://www.youtube.com/"
}

Response (O campo shortUrl é gerado automaticamente usando a biblioteca nanoid)

{
	"originalUrl": "https://www.youtube.com/",
	"shortUrl": "pYxa00T"
}

## GET /:shortUrl

GET /pYxa00T