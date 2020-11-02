const Sequelize = require("sequelize");
const sequelize = new Sequelize("test", "root", "password", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = sequelize;