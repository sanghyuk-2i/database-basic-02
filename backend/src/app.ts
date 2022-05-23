import express, { Request, Response, NextFunction } from 'express';
import { createConnection } from 'mysql';
import 'dotenv/config';
import cors from 'cors';

const connection = createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_NAME
})

connection.connect();

const app = express();

const allowOrigins = ['http://localhost:3000'];
const options: cors.CorsOptions = {
  origin: allowOrigins
} ;

app.use(cors(options));
app.use(express.urlencoded());
app.use(express.json());

// 물품 조회
app.get('/items', (req: Request, res: Response, next: NextFunction) => {
  connection.query('SELECT * from Customer', (error, rows, fields) => {
    if (error) throw error;
    res.send(rows);
  });
});

// 물품 추가
app.put('/items/:id', (req: Request, res: Response, next: NextFunction) => {
  const data = JSON.parse(req.body);
  console.log(data);
  // connection.query('SELECT * from Customer', (error, rows, fields) => {
  //   if (error) throw error;
  //   res.send(rows);
  // });
});

// 물품 삭제
app.delete('/items/:id', (req: Request, res: Response, next: NextFunction) => {
  const data = JSON.parse(req.body);
  console.log(data);
  // connection.query('SELECT * from Customer', (error, rows, fields) => {
  //   if (error) throw error;
  //   res.send(rows);
  // });
});

// 구매 이력
app.get('/customer', (req: Request, res: Response, next: NextFunction) => {

});

// 구매 이력 추가
app.post('/customer/:id', (req: Request, res: Response, next: NextFunction) => {
  const data = JSON.parse(req.body);
  console.log(data);
  // connection.query('SELECT * from Customer', (error, rows, fields) => {
  //   if (error) throw error;
  //   res.send(rows);
  // });
});

// 손님 구매 이력(상세)
app.get('/customer/:id', (req: Request, res: Response, next: NextFunction) => {

})


app.listen('1234', () => {
    console.log(`
  ################################################
  🛡️  Server listening on port: 1234🛡️
  ################################################
`);
});
