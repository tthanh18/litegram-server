import { getPort } from '@common/utils/envConfig'
import { app, logger } from './server'

const port = getPort()

const server = app.listen(4000, () => {
  logger.info('Server listen on port: ' + port)
})

const onCloseSignal = () => {
  logger.info('sigint received, shutting down')
  server.close(() => {
    logger.info('server closed')
    process.exit()
  })
  setTimeout(() => process.exit(1), 10000).unref() // Force shutdown after 10s
}

process.on('SIGINT', onCloseSignal)
process.on('SIGTERM', onCloseSignal)
