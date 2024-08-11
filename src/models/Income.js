const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/config");
const User = require("./User");

const Income = sequelize.define('User',{
    description:{
        type: DataTypes.STRING,
        allowNull:false
    },
    amount:{
        type: DataTypes.ENUM('fixed','variable'),
        allowNull:false
    }
})

Income.belongsTo(User)

module.exports = Income