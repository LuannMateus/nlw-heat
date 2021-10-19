import { NextFunction, Request, Response } from 'express';
import { ProfileUserService } from '../services/ProfileUserService';

class ProfileUserController {
  async handle(req: Request, res: Response, next: NextFunction) {
    const { user_id } = req;

    const profileUserService = new ProfileUserService();

    const result = await profileUserService.execute(user_id);

    return res.status(200).json(result);
  }
}

export { ProfileUserController };
