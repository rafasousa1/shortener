# URL Shortener API 🔗
![Fastify](https://img.shields.io/badge/Fastify-000000?style=for-the-badge&logo=fastify&logoColor=white)
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