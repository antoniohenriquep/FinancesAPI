const Expense = require("../models/Expense");
const Income = require("../models/Income");
const Installment = require("../models/Installment");
const MonthlyBalance = require("../models/MonthlyBalance");
const User = require("../models/User");

//Cria as associacoes entre as tabelas do Banco de Dados
function setupAssociations() {
    // User Associations

    User.hasMany(Income) //Usuario pode ter varias fontes de renda
    User.hasMany(Expense) //Usuario pode ter varias despesas
    User.hasMany(MonthlyBalance) //Usuario pode ter varios balanços mensais

    // Income Associations
    Income.belongsTo(User) //Uma fonte de renda pode pertencer a apenas um usuario

    // Expense Associations
    Expense.belongsTo(User) //Uma despesa pode pertencer a apenas um usuario
    Expense.hasMany(Installment) //Uma despesa pode ter varias parcelas

    // Installment Associations
    Installment.belongsTo(Expense) //Um numero de parcelas pode pertencer a apenas uma despesa
    
    // MonthlyBalance Associations
    MonthlyBalance.belongsTo(User);

}

module.exports = setupAssociations