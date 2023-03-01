const express = require("express")
const transactions = express.Router()

// validations import here

const { 
    getAllTransactions,
    getTransaction,
    createTransaction,
    deleteTransaction,
    updateTransaction
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

// SHOW
transactions.get("/:id", async ( req, res) => {
    const { id } = req.params
    const transaction = await getTransaction(id)
    if (transaction){
        res.status(200).json(transaction)
    } else {
        res.status(404).json({ error: "not found"})
    }
})

// CREATE
transactions.post("/", async ( req, res) => {
    try {
        const transaction = await createTransaction(req.body)
        res.status(200).json(transaction)
    } catch (error) {
        res.status(500).json({ error: "server error"})
    }
})

// DELETE
transactions.delete("/:id", async ( req, res) => {
    try {
        const { id } = req.params
        const deletedTransaction = await deleteTransaction(id)
        res.status(200).json(deletedTransaction)
    } catch (error) {
        res.status(500).json({ error: "server error"})
    }
})

// UPDATE
transactions.put("/:id", async ( req, res) => {
    try {
        const { id } = req.params
        const updatedTransaction = await updateTransaction(id, req.body)
        res.status(200).json(updatedTransaction)
    } catch (error) {
        res.status(404).json({ error: "message not found"})  
    }
})


module.exports = transactions