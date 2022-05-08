import express, { Request, Response, NextFunction } from 'express';
import { createConnection } from 'mysql';

const app = express();


app.get('/welcome', (req: Request, res: Response, next: NextFunction) => {
  res.send("Welcome");
});

app.listen('1234', () => {
    console.log(`
  ################################################
  🛡️  Server listening on port: 1234🛡️
  ################################################
`);
});
