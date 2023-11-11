"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
const sequelize = new sequelize_1.Sequelize('db_lead', 'root', 'Saf#@9182', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3308,
    logging: false
});
exports.default = sequelize;
