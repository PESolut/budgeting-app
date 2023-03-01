const express = require("express")
const transactions = express.Router()

// validations import here

const { 
    getAllTransactions
} = require("../queries/transactions")

// INDEX
transactions.get("/", async ( req, res) => {
    const allTransactions = await getAllTransactions()
    if (allTransactions){
        res.status(200).json(allTransactions)
    } else {
        res.status(500).json({ error: "server error"})
    }
})

module.exports = transactions