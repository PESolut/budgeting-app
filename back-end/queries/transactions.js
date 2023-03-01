const db = require("../db/dbConfig")

// INDEX
const getAllTransactions = async () => {
    try {
        allTransactions = await db.any('SELECT * from transactions')
        return allTransactions
    } catch (error) {
        return error
    }
}

// SHOW
const getTransaction = async (id) => {
    try {
        const oneTransaction = await db.one("SELECT * FROM transactions WHERE id=$1", id)
        return oneTransaction
    } catch (error) {
        return error
    }
}

// CREATE
const createTransaction = async (transaction) => {
    try {
        const newTransaction = await db.one(
            "INSERT INTO transactions (item_name, amount, date, sender, category) VALUES ($1, $2, $3, $4, $5) RETURNING *", [transaction.item_name, transaction.amount, transaction.date, transaction.sender, transaction.category]
        )
        return newTransaction
    } catch (error) {
        return error
    }
}


// DELETE
const deleteTransaction = async (id) => {
    try {
        const deletedTransaction = await db.one('DELETE FROM transactions WHERE id=$1 RETURNING *', id)
        return deletedTransaction
    } catch (error) {
        return error
    }
}

// UPDATE
const updateTransaction = async (id, transaction) => {
    try {
        const updatedTransaction = await db.one('UPDATE transactions SET item_name=$1, amount=$2, date=$3, sender=$4, category=$5 WHERE id=$6 RETURNING *', [transaction.item_name, transaction.amount, transaction.date, transaction.sender, transaction.category, id])
        return updatedTransaction
    } catch (error) {
        return error
    }
}

module.exports = {
    getAllTransactions,
    getTransaction,
    createTransaction,
    deleteTransaction,
    updateTransaction
}