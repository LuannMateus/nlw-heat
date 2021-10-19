import { Router } from 'express';
import { CreateMessageController } from '../controllers/CreateMessageController';
import { GetLastThreeMessagesController } from '../controllers/GetLastThreeMessagesController';
import { ensureAuthenticatedMiddleware } from '../middleware/ensureAuthenticated';

const messageRouter = Router();

messageRouter.get(
  '/messages/lastThree',
  new GetLastThreeMessagesController().handle
);

messageRouter.post(
  '/messages',
  ensureAuthenticatedMiddleware,
  new CreateMessageController().handle
);

export { messageRouter };
