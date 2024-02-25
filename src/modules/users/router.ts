import { Router } from 'express'
import { UserModule } from './module'

export const userRouter: Router = (() => {
  const router = Router()
 
  router.get('/', (req, res: any) => {
    UserModule.getAllUsers()
      .then(data => res.send(data))
      .catch(error => res.status(500).send(error))
  })

  return router
})()
