import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const dbConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  database: 'postgres',
  username: 'postgres',
  password: '1234',
  port: 5432,
};

export default dbConfig;
