const express = require("express")
const transactions = express.Router()

// validations import here

// queries imports here

// INDEX
transactions.get("/", async ( req, res) => {
    const allTransactions = await getAllTransactions()
    if (allTransactions){
        res.status(200).json(allTransactions)
    } else {
        res.status(500).json({ error: "server error"})
    }
})