import express from 'express'
import diaryRouter from './routes/diaries'

const app = express()
const PORT = 3000

app.use(express.json())

app.get('/ping', (_req, res) => {
  console.log('Someone pinged in here!!')
  res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
