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
    date:{ 
        type: DataTypes.DATEONLY,
        allowNull: true, // Data é necessária apenas para ganhos variáveis

        //O campo validate é usado para verificar se algum atributo é verdadeiro
        validate: {
            isDate: true,
            //Neste caso o value refere-se a date. Ou seja, se nao temos uma data especificada e o tipo de ganho eh variavel, nao será possivel registrar o objeto no banco de dados.
            isDateValid(value) {
                if (this.type === 'variable' && !value) {
                    throw new Error('A data é obrigatória para ganhos variáveis.');
                }
            }
        }
    }
})


module.exports = Income