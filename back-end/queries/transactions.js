const db = require("../db/dbConfig")

const getAllTransactions = async () => {
    try {
        allTransactions = await db.any('SELECT * from transactions')
        return allTransactions
    } catch (error) {
        return error
    }
}

module.exports = {
    getAllTransactions
}