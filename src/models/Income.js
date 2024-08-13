const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/config");

//Model de fonte de renda
const Income = sequelize.define('Income',{
    //Nome da fonte de renda
    description:{
        type: DataTypes.STRING,
        allowNull:false
    },
    //Tipo, podendo ser fixo ou variavel
    type:{
        type: DataTypes.ENUM('fixed','variable'),
        allowNull:false
    },
    //Valor da fonte de renda
    amount:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
    date: { 
        type: DataTypes.DATEONLY,
        allowNull: true, // Data é necessária apenas para ganhos variáveis
        validate: {
            isDate: true,
            isDateValid(value) {
                if (this.type === 'variable' && !value) {
                    throw new Error('A data é obrigatória para ganhos variáveis.');
                }
            }
        }
    }
})


module.exports = Income