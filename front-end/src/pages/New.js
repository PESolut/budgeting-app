import { useState, useEffect } from "react";
import axios from "axios";
import TransactionsView from "../components/TransactionsView";
import TransactionsForm from "../components/TransactionsForm";

const New = () => {
    const API = process.env.REACT_APP_API_URL;
    const [transactions, setTransactions] = useState([])
    const [total, setTotal] = useState([])

    useEffect(() => {
        axios
            .get(`${API}/transactions`)
            .then((res) => setTransactions(res.data))
            .catch((error) => console.log(error))
    },[])
    return (
        <div>
            <h2>New Page!</h2>
            <br/>
            <TransactionsForm/>
            <br/>
            <TransactionsView transactions={transactions}/>
            
        </div>
    );
};

export default New;