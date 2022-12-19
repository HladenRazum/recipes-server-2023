import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const dbConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  database: 'recipes',
  username: 'postgres',
  password: '1234',
  port: 5432,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  // entities: [UserEntity],
  synchronize: false,
  migrations: [__dirname + '/migrations/**/*{.js,.ts}'],
};

export default dbConfig;
