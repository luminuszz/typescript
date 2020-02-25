import { Request, Response } from 'express'
import User from '../schemas/User'

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    const users = await User.find()
    return res.json(users)
  }

  public async store (req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body
      const user = await User.create(data)
      return res.json(user)
    } catch (error) {
      res.status(error.status).json({ message: 'error interno' })
    }
  }

  public async put (req:Request, res:Response):Promise<Response> {
    const data = req.body

    const userDelete = await User.findOneAndUpdate(data.id, data)
    return res.json(userDelete)
  }

  public async delete (req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.body

      const userDelete = await User.findOneAndDelete(id).exec()

      return res.json(userDelete)
    } catch (error) {
      return res.status(error.status).json({ message: 'Erro interno' })
    }
  }
}

export default new UserController()

/**
 *
 */
