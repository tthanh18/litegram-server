import dotenv from 'dotenv'
import { pino } from 'pino'
import express, { Express } from 'express'
import helmet from 'helmet'
import requestLogger from '@common/middleware/requestLogger'
import { openAPIRouter } from '@api-docs/openAPIRouter'
import { healthCheckRouter } from '@modules/health-check/heath-check.router'
import { userRouter } from '@modules/users/router'

dotenv.config()

const logger = pino({ name: 'sever start' })
const app: Express = express()

//Middleware
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Request Logger
// app.use(requestLogger())

//Routes
app.use('/health-check', healthCheckRouter)
app.use('/users', userRouter)

//Swagger UI
app.use(openAPIRouter)

export { app, logger }
