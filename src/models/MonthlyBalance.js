const { DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../db/config");

const MonthlyBalance = sequelize.define('MonthlyBalance',{
    //Mes do relatorio
    month:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    //Ano do relatorio
    year:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    //Total de ganhos fixos
    totalFixedIncome:{ 
        type: DataTypes.FLOAT, 
        allowNull: false, 
        defaultValue: 0 
    },
    //Total de ganhos variaveis
    totalVariableIncome:{ 
        type: DataTypes.FLOAT, 
        allowNull: false, 
        defaultValue: 0 
    },
    //Total de despesas
    totalExpense:{
        type: DataTypes.FLOAT,
        allowNull:false,
        defaultValue:0
    },
    //Balanco financeiro
    balance:{
        type: DataTypes.FLOAT,
        allowNull:false,
        defaultValue:0,
    }
})

module.exports = MonthlyBalance