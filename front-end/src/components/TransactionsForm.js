import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TransactionsForm = () => {
    const API = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();
    const [transaction, setTransaction] = useState({
    item_name: "",
    amount: "",
    date: "",
    sender: "",
    category: "food",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTransaction((prevTransaction) => ({
      ...prevTransaction,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (transaction.amount >= 1000){
        alert('Transaction amount must be less then 1000')
    } else {
         console.log(transaction); // Replace with code to handle form submission
    axios
        .post(`${API}/transactions`, transaction)
        .then(() => {
            console.log('transaction posted')
        })
        .catch((error) => console.log(error))
        window.location.reload()
        navigate('/') 
    }
  

  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="item_name">Item name:</label>
        <input
          type="text"
          id="item_name"
          name="item_name"
          value={transaction.item_name}
          onChange={handleChange}
        />

        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={transaction.amount}
          onChange={handleChange}
        />

        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={transaction.date}
          onChange={handleChange}
        />

        <label htmlFor="sender">Sender:</label>
        <input
          type="text"
          id="sender"
          name="sender"
          value={transaction.sender}
          onChange={handleChange}
        />

        <label htmlFor="category">Category:</label>
        <select
          id="category"
          name="category"
          value={transaction.category}
          onChange={handleChange}
        >
            <option value="income">Income</option>
            <option value="food">Food</option>
            <option value="housing">Housing</option>
            <option value="transportation">Transportation</option>
            <option value="entertainment">Entertainment</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TransactionsForm;
