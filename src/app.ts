import 'dotenv/config'
import mysql from 'mysql'

const HOST = process.env.HOST_AWS
const DBNAME = process.env.DBNAME_AWS
const USERNAME = process.env.USERNAME_AWS
const PASSWORD = process.env.PASSWORD_AWS

console.log(`Start check ${DBNAME}`)

const dbConfig = {
  host: HOST,
  user: USERNAME,
  password: PASSWORD,
  database: DBNAME,
  port: 3306
};

console.log(dbConfig)

const connection = mysql.createConnection(dbConfig);

connection.connect(error => {
  if (error) {
    console.error('Error connection:', error);
    return;
  }

  console.log('Successful connection');
  connection.end();
});