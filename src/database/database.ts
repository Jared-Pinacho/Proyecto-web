import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('inglesdb', 'postgres', 'admin',{
    host: 'localhost',
    dialect: 'postgres'
})