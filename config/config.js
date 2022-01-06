require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mysql",
  },
  test: {
    username: "peace_olap_system",
    password: "Osamuyi4real",
    database: "peace",
    host: "mysql-peace.alwaysdata.net",
    dialect: "mysql",
  },
  production: {
    username: "peace_olap_system",
    password: "Osamuyi4real",
    database: "peace",
    host: "mysql-peace.alwaysdata.net",
    dialect: "mysql",
  },
};
