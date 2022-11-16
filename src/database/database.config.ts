import { Sequelize } from "sequelize";

const DB_USER = "postgres"
const DB_PASSWORD = "queen"
const DB_NAME = "postgres"
const DB_HOST = "localhost"
const DB_DIALECT = "postgres";

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,

  dialectOptions: {
    encrypt: true
   
  },
  logging:false
});

