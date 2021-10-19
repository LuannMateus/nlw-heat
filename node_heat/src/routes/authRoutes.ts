import 'dotenv/config';
import { NextFunction, Request, Response, Router } from 'express';
import { AuthenticateUserController } from '../controllers/AuthenticateUserController';

const authRouter = Router();

authRouter.get('/github', (req: Request, res: Response, next: NextFunction) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  );
});

authRouter.get(
  '/signin/callback',
  (req: Request, res: Response, next: NextFunction) => {
    const { code } = req.query;

    return res.status(200).json(code);
  }
);

authRouter.post('/authenticate', new AuthenticateUserController().handle);

export { authRouter };
