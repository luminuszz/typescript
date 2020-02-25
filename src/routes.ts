import { Router } from 'express'
import UserController from './controllers/UserController'

const routes = Router()
// GET
routes.get('/users', UserController.index)

// POST
routes.post('/createuser', UserController.store)

export default routes
