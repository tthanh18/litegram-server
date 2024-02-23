import dotenv from 'dotenv'
import { pino } from 'pino'
import express, { Express } from 'express'
import helmet from 'helmet'
import requestLogger from '@common/middleware/requestLogger'
import { healthCheckRouter } from '@modules/healthCheck/healthCheckRouter'
import { openAPIRouter } from '@api-docs/openAPIRouter'

dotenv.config()

const logger = pino({ name: 'sever start' })
const app: Express = express()

//Middleware
app.use(helmet())

//Request Logger
app.use(requestLogger())

//Routes
app.use('/health-check', healthCheckRouter)

//Swagger UI
app.use(openAPIRouter)

export { app, logger }
