import { Sequelize } from "sequelize";

const DB_USER = process.env.DB_USER as "inglesito_user";
const DB_PASSWORD = process.env.DB_PASSWORD as "W6ou3SiVc1tLylWZMQcjNbPQNBXyhMNO";
const DB_NAME = process.env.DB_NAME as "inglesito";
const DB_HOST = process.env.DB_HOST as "dpg-ce6el402i3mk2v4ep7p0-a";
const DB_DIALECT = "postgres";

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
  dialectOptions: {
    encrypt: true,
    ssl: {
      rejectUnauthorized: false,
    },
  },
  logging:false
});