const Sequelize = require("sequelize");
const sequelize = require("./config/db");

const user = sequelize.define('User', {
    firstname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastname: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

user.create({
    firstname: "Nathália",
    lastname: "Tostes"
});

sequelize.sync();

module.exports = user;
