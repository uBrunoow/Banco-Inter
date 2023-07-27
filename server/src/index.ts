import 'dotenv/config'
import fastify from 'fastify'
import mongoose from 'mongoose'
import { authRoutes } from './routes/auth'

const app = fastify()

app.register(authRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('💸 HTTP server running on http://localhost:3333')
  })

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

mongoose
  .connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cluster0.trjdanq.mongodb.net/?retryWrites=true&w=majority    `,
  )
  .then(() => {
    console.log(`🟢 Connection established with BancoInterDB`)
  })
  .catch((err) => {
    console.log(`🔴 Error connecting to Database because ${err}`)
  })
