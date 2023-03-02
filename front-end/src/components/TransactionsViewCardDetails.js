import axios from "axios";
import { useState, useEffect } from "react";

const API = process.env.REACT_APP_API_URL;

const TransactionsViewCardDetails = ({
  item_name,
  amount,
  date,
  sender,
  category,
  transactionID,
}) => {
  const [transactionData, setTransactionData] = useState({});
  const [formData, setFormData] = useState({
    item_name: "",
    amount: "",
    date: "",
    sender: "",
    category: "",
  });

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const response = await axios.get(`${API}/transactions/${transactionID}`);
        setTransactionData(response.data);
        setFormData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTransaction();
  }, [transactionID]);

  const handleDelete = async () => {
    try {
      await axios.delete(`${API}/transactions/${transactionID}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData)

    if (formData.amount >= 1000){
        alert('Transaction amount must be less then 1000')
    } else {
         try {
      await axios.put(`${API}/transactions/${transactionID}`, formData);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }   
    }


  };

  return (
    <>
      <button onClick={handleDelete}>🗑</button>
      <span>
        Category: {category} Sender: {sender}
      </span>
      <form onSubmit={handleSubmit}>
        <label htmlFor="item_name">Item Name</label>
        <input
          type="text"
          id="item_name"
          name="item_name"
          value={formData.item_name}
          onChange={handleChange}
        />

        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
        />

        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />

        <label htmlFor="sender">Sender</label>
        <input
          type="text"
          id="sender"
          name="sender"
          value={formData.sender}
          onChange={handleChange}
        />

        <label htmlFor="category">Category</label>
        <input
          type="text"
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />

        <button type="submit">Update</button>
      </form>
    </>
  );
};

export default TransactionsViewCardDetails;
