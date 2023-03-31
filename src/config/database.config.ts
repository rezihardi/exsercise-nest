import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export const devConfig: PostgresConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Dontcryrez11',
    database: 'postgres',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
}