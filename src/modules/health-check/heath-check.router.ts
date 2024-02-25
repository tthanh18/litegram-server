import { Router } from 'express'

export const healthCheckRouter: Router = (() => {
  const router = Router()
 
  router.get('/', (req: any, res: any) => {
    return res.send([{ status: 'ok' }])
  })

  return router
})()
