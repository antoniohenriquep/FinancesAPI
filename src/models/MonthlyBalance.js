const { DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../db/config");

const MonthlyBalance = sequelize.define('MonthlyBalance',{
    //Mes do relatorio
    month:{
        type:DataTypes.STRING,
        allowNull:false
    },
    //Ano do relatorio
    year:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    //
    totalFixedIncome:{ 
        type: DataTypes.FLOAT, 
        allowNull: false, 
        defaultValue: 0 
    },
    totalVariableIncome:{ 
        type: DataTypes.FLOAT, 
        allowNull: false, 
        defaultValue: 0 
    },
    totalExpense:{
        type: DataTypes.FLOAT,
        allowNull:false,
        defaultValue:0
    },
    balance:{
        type: DataTypes.FLOAT,
        allowNull:false,
        defaultValue:0,
        set() {
            // Calcula o saldo líquido automaticamente
            return this.getDataValue('totalFixedIncome') + 
                   this.getDataValue('totalVariableIncome') - 
                   this.getDataValue('totalExpense')
        }
    }
})

module.exports = MonthlyBalance