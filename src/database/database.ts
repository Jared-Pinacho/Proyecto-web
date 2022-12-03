import { Sequelize } from "sequelize";

const DB_PASSWORD = process.env.DBPASSWORD as string;
const DB_NAME = process.env.DBNAME as string;
const DB_HOST = process.env.DBHOST as string;
const DB_USER = process.env.DB as string;
const DB_DIALECT = 'postgres';

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD,{
    host: DB_HOST,
    dialect: DB_DIALECT
})