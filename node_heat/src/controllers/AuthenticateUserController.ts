import { NextFunction, Request, Response } from 'express';
import { AuthenticateUserService } from '../services/AuthenticateUserService';

class AuthenticateUserController {
  async handle(req: Request, res: Response, next: NextFunction) {
    const { code } = req.body;

    const authenticateUserService = new AuthenticateUserService();

    try {
      const result = await authenticateUserService.execute(code);

      return res.status(200).json(result);
    } catch (error) {
      return res.status(401).json({
        message_error: error.message,
      });
    }
  }
}

export { AuthenticateUserController };
