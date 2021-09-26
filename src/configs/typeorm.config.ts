import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  username: 'root',
  password: '1234',
  database: 'youtude-drawer',
  entities: [],
  synchronize: true,
  port: 3306,
};

// const typeORMConfig: TypeOrmModuleOptions = {
//   type: 'mysql',
//   host: '127.0.0.1',
//   username: 'root',
//   password: '1234',
//   database: 'youtude-drawer',
//   entities: [],
//   synchronize: true,
//   port: 3306,
// };

// const typeORMConfig: TypeOrmModuleOptions = {
//   type: 'mysql',
//   host: process.env.DATABASE_HOST,
//   username: process.env.DATABASE_USERNAME,
//   password: process.env.DATABASE_PASSWORD,
//   database: process.env.DATABASE_NAME,
//   entities: [],
//   synchronize: true,
//   port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
// };
