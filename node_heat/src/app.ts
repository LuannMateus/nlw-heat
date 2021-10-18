import express from 'express';

class App {
  private app;

  constructor() {
    this.app = express();
  }

  public init() {}

  public get getApp() {
    return this.app;
  }
}

export default App;
