const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/config");

const Expense = sequelize.define('Expense',{
    //Nome da despesa
    description:{
        type:DataTypes.STRING,
        allowNull: false
    },
    //Valor da despesa
    amount:{
        type: DataTypes.FLOAT, 
        allowNull: false
    },
    //Tipo, podendo ser fixo, variavel, ou do cartao de credito
    type:{
        type: DataTypes.ENUM('fixed', 'one-time', 'credit-card'),
        allowNull: false
    },
    //Numero de parcelas, caso seja uma despesa de cartao de credito
    installments:{
        type: DataTypes.INTEGER,
        allowNull: true
    }
})


module.exports = Expense