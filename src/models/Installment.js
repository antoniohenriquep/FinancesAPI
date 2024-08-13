const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/config");


const Installment = sequelize.define('Installment',{
    //Numero da parcela. Por exemplo: parcela 1, parcela 2.
    installmentNumber:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    //Data de vencimento
    dueDate:{
        type: DataTypes.DATEONLY,
        allowNull:false
    },
    //Valor da parcela
    amount:{
        type: DataTypes.FLOAT,
        allowNull:false
    }
})


module.exports = Installment