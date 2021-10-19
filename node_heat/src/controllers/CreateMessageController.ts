import { NextFunction, Request, Response } from 'express';
import { CreateMessageService } from '../services/CreateMessageService';

class CreateMessageController {
  async handle(req: Request, res: Response, next: NextFunction) {
    const { message } = req.body;
    const { user_id } = req;

    const createMessageService = new CreateMessageService();

    const result = await createMessageService.execute(message, user_id);

    return res.status(201).json(result);
  }
}

export { CreateMessageController };
