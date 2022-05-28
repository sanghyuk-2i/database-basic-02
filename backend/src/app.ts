import { IReceipt, ICustomer } from './interface';
import { tabelReceipt, tableCustomer, tableProduct } from './initialTable';
import express, { Request, Response, NextFunction } from 'express';
import { createConnection } from 'mysql';
import moment from 'moment';
import 'dotenv/config';
import cors from 'cors';

const connection = createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_NAME,
  dateStrings: true,
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


tableProduct(connection);
tableCustomer(connection);
tabelReceipt(connection);

// 물품 조회
app.get('/items', (req: Request, res: Response, next: NextFunction) => {
  connection.query('SELECT * from product', (error, rows, fields) => {
    if (error) throw error;
    res.send(rows);
  });
});

// 물품 추가
app.post('/items', (req: Request, res: Response, next: NextFunction) => {
  const data = req.body;
  connection.query(`insert into product (product_name, product_class, capacity, price) values ('${data.product_name}', '${data.product_class}', '${data.capacity}', ${data.price});`, (error, rows, fields) => {
    if (error) throw error;
    console.log('insert new data');
    res.send('complete');
  });
});

// 물품 삭제
app.delete('/items/:id', (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  connection.query(`delete from product where id = ${id};`, (error, rows, fields) => {
    if (error) throw error;
    console.log('delete data');
    res.send('complete');
  });
});

// 구매 이력
app.get('/customer', (req: Request, res: Response, next: NextFunction) => {
  connection.query('SELECT * from customer ORDER BY buydate DESC', (error, rows, fields) => {
    if (error) throw error;
    // if(rows.length !== 0){
    //   rows = rows.map((v: ICustomer) => ({
    //   id: v.id,
    //   total: v.total,
    //   discount: v.discount,
    //   prod_quantity: v.prod_quantity,
    //   date: moment(v.date,'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss'),
    // }))};
    res.send(rows);
  });
});

// 구매 이력 ID 찾기
app.get('/customer/id', (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.params;
  connection.query('SELECT id from customer ORDER BY buydate DESC LIMIT 1', (error, rows, fields) => {
    if (error) throw error;
    res.send(rows);
  });
});

// 구매 이력 추가
app.post('/customer', (req: Request, res: Response, next: NextFunction) => {
  const data = req.body
  console.log(`body: ${data}`);
  connection.query(`insert into customer (prod_quantity, total, discount, buydate) values (${data.prod_quantity}, ${data.total}, ${data.discount}, now());`, (error, rows, fields) => {
    if (error) throw error;
    console.log('insert new data');
    res.send('complete')
  });
});

// 손님 구매 이력(상세)
app.get('/receipt/:id', (req: Request, res: Response, next: NextFunction) => {
  const customer_id = req.params.id;
  connection.query(`SELECT * FROM receipt WHERE customer_id=${customer_id};`, (error, rows, fields) => {
    if (error) throw error;
    res.send(rows);
  });
})

// 손님 구매 이력(상세) 추가
app.post('/receipt', (req: Request, res: Response, next: NextFunction) => {
  const data:[] = req.body
  data.forEach((element: IReceipt) => {
    connection.query(`insert into receipt (customer_id, product_id, product_name, quantity) values (${element.customer_id}, ${element.product_id}, "${element.product_name}", ${element.quantity});`, (error, rows, fields) => {
      if (error) throw error;
      console.log('insert new data');
    });
  });
  res.send('complete')
});


app.listen('1234', () => {
    console.log(`
  ################################################
  🛡️  Server listening on port: 1234🛡️
  ################################################
`);
});
