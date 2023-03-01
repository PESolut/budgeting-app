import axios from "axios";
import { useEffect, useState } from "react";
import TransactionsView from "../components/TransactionsView";

const Home = () => {
    const API = process.env.REACT_APP_API_URL;
    const [transactions, setTransactions] = useState([])
    const [total, setTotal] = useState([])

    useEffect(() => {
        axios
            .get(`${API}/transactions`)
            .then((res) => setTransactions(res.data))
            .catch((error) => console.log(error))
    },[])
    console.log('Home Page transactions object useState ( initail pageload get request )',transactions)

    // total amount
    const totalAmount = (transactions) => {
        let totalAmountCalc = 0
        for (const transaction of transactions) {
            // totalAmountCalc += transaction.amount
            if (transaction.amount.split('')[0] != '-') {
                const iterationAmountQ = transaction.amount.split('')
                console.log('totalAmount function: adding', iterationAmountQ, 'to total' )
                const iterationAmountQF = iterationAmountQ.slice(1)
                console.log('formatted iteration amount precalc: ',iterationAmountQF)
                const iterationAmountQF_joined = iterationAmountQF.join("")
                console.log(iterationAmountQF_joined)
                const iterationNumber = parseFloat(iterationAmountQF_joined)
                console.log(iterationNumber)
            } else {
                const iterationAmountQ = transaction.amount.split('')
                console.log('totalAmount function: negating', iterationAmountQ, 'to total' )
                const iterationAmountQF = iterationAmountQ.slice(2)
                console.log('formatted iteration amount precalc: ',iterationAmountQF)
                const iterationAmountQF_joined = iterationAmountQF.join("")
                console.log(iterationAmountQF_joined)
                const iterationNumber = parseFloat(iterationAmountQF_joined)
                console.log(iterationNumber)
            }
        }
        return totalAmountCalc
    }

    totalAmount(transactions)
   

    return (
        <div>
            <h2>Home Page!</h2>
            <br/>
            <TransactionsView transactions={transactions}/>
        </div>
    );
};

export default Home;