import { Sequelize } from "sequelize";


/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
const sequelize = new Sequelize('db_lead', 'root', 'Saf#@9182',  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3308,
    logging: false
  });

  export default sequelize;