import express, { Application } from 'express';
import cors from 'cors';
import { authRouter, messageRouter, profileRouter } from './routes';

class App {
  private app: Application;

  constructor() {
    this.app = express();

    this.init();
  }

  public init() {
    this.middleware();
    this.routes();
  }

  public middleware() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  public routes() {
    this.app.use('/api/v1', authRouter);
    this.app.use('/api/v1', messageRouter);
    this.app.use('/api/v1', profileRouter);
  }

  public get getApp() {
    return this.app;
  }
}

export default App;
