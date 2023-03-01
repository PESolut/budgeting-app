// IMPORTS
const cors = require("cors")
const express = require('express')
const morgan = require("morgan")
const { PORT, CLIENT_URL } = require('./constants')

// CONFIGURATION
const app = express()

// MIDDLEWARE
app.use(express.json())
app.use(morgan("tiny"))
app.use(cors({ origin: CLIENT_URL, credentials: true}))

// CONTROLLERS

// ROUTES
app.get("/", (req, res) => {
    res.send("Welcome to the budgeting API")
})

app.get("*", (req, res) => {
    res.status(404).send("Page not found");
})

console.log(CLIENT_URL)

// EXPORT
module.exports = app;