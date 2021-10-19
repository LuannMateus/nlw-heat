import { NextFunction, Request, Response } from 'express';
import { GetLastThreeMessagesService } from '../services/GetLastThreeMessagesService';

class GetLastThreeMessagesController {
  async handle(req: Request, res: Response, next: NextFunction) {
    const getLastThreeMessagesService = new GetLastThreeMessagesService();

    const result = await getLastThreeMessagesService.execute();

    return res.status(200).json(result);
  }
}

export { GetLastThreeMessagesController };
