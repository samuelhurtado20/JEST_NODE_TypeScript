import express from 'express'
import eee from '/red'
const app = express()
app.use(express.json())

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('someone pinged here.')
  res.send('pong')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`)
})

export default { app }
