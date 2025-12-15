import express from 'express'
import { nanoid } from 'nanoid'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()

app.use(express.json())

app.post('/shortener', async (req, res) => {
    const { originalUrl } = req.body

    const shortUrl = nanoid(7)

    const newUrl = await prisma.url.create({
        data: {
            originalUrl,
            shortUrl
        }
    })

    res.status(201).json({
        originalUrl: newUrl.originalUrl,
        shortUrl: newUrl.shortUrl
    })
})

app.get('/:shortUrl', async (req, res) => {
    const { shortUrl } = req.params

    const url = await prisma.url.findUnique({
        where: { shortUrl }
    })

    if (url) {
        return res.redirect(url.originalUrl)
    } else {
        return res.status(404).json({ message: 'Url Not found!'})
    }
})

app.listen(3333, () => console.log('Server On!'))