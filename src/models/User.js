const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/config");
const Income = require("./Income");

const User = sequelize.define('User',{
    name:{
        type: DataTypes.STRING, 
        allowNull:false
    },
    email:{
        type: DataTypes.STRING, 
        allowNull:false
    },
    password:{
        type: DataTypes.STRING, 
        allowNull:false
    },
})

User.hasMany(Income)
User.hasMany(Expense)
User.hasMany(MonthlyBalance)
User.hasMany(BalanceHistory)

module.exports = User