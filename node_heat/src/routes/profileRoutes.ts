import { Router } from 'express';
import { ProfileUserController } from '../controllers/ProfileUserController';
import { ensureAuthenticatedMiddleware } from '../middleware/ensureAuthenticated';

const profileRouter = Router();

profileRouter.get(
  '/profile',
  ensureAuthenticatedMiddleware,
  new ProfileUserController().handle
);

export { profileRouter };
