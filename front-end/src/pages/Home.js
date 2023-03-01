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

    return (
        <div>
            <h2>Home Page!</h2>
            <br/>
            <TransactionsView transactions={transactions}/>
        </div>
    );
};

export default Home;