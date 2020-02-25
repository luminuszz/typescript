import { Request, Response } from 'express'
import User from '../schemas/User'

class UserController {
  public async index (req:Request, res:Response):Promise<Response> {
    const users = await User.find()
    return res.json(users)
  }

  public async store (req:Request, res:Response):Promise<Response> {
    try {
      const data = req.body
      const user = await User.create(data)
      return res.json(user)
    } catch (error) {
      res.status(error.status).json({ message: 'error interno' })
    }
  }
}

export default new UserController()

/**
 *
 */
