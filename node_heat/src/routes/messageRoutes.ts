import { Router } from 'express';
import { CreateMessageController } from '../controllers/CreateMessageController';
import { ensureAuthenticatedMiddleware } from '../middleware/ensureAuthenticated';

const messageRouter = Router();

messageRouter.post(
  '/messages',
  ensureAuthenticatedMiddleware,
  new CreateMessageController().handle
);

export { messageRouter };
