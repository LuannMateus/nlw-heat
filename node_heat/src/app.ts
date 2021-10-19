import express, { Application } from 'express';
import { authRouter, messageRouter } from './routes';

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
    this.app.use(express.json());
  }

  public routes() {
    this.app.use('/api/v1', authRouter);
    this.app.use('/api/v1', messageRouter);
  }

  public get getApp() {
    return this.app;
  }
}

export default App;
