import { Connection } from 'mysql';

export const tableProduct = (connection: Connection) => {
    connection.query(`SHOW TABLES LIKE 'product'`, (error, rows, fields) => {
        if (error) throw error;
        rows.length === 0 && connection.query(`create table product
        (
          id int not null auto_increment primary key,
            product_name varchar(30) not null,
            product_class varchar(10) not null,
            capacity varchar(10) not null,
            price int not null
        ) auto_increment=1000;`, (error, rows, fields) => {
          if (error) throw error;
          console.log(rows)
        });
      });
}

export const tableCustomer = (connection: Connection) => {
    connection.query(`SHOW TABLES LIKE 'customer'`, (error, rows, fields) => {
        if (error) throw error;
        rows.length === 0 && connection.query(`create table customer
        (
          id int not null auto_increment primary key,
            prod_quantity int not null,
            total int not null,
            discount int not null,
            buydate datetime not null
        );`, (error, rows, fields) => {
          if (error) throw error;
          console.log(rows)
        });
      });
}

export const tabelReceipt = (connection: Connection) => {
    connection.query(`SHOW TABLES LIKE 'receipt'`, (error, rows, fields) => {
        if (error) throw error;
        rows.length === 0 && connection.query(`create table receipt
        (
          id int not null auto_increment primary key,
            customer_id int not null,
            product_id int not null,
            product_name varchar(30) not null,
            quantity int not null,
            foreign key (customer_id) references customer(id),
            foreign key (product_id) references product(id)
        ) auto_increment=55555;`, (error, rows, fields) => {
          if (error) throw error;
          console.log(rows)
        });
      });
}