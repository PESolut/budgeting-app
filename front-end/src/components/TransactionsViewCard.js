import { useState } from "react";
import TransactionsViewCardDetails from "./TransactionsViewCardDetails";

const TransactionsViewCard = ({ transaction }) => {
  const [showDetails, setShowDetails] = useState(false);

  const { item_name, amount, date, sender, category } = transaction;
  const transactionID = transaction.id
  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <li>
      {item_name}{" "}
      <span className="transaction-details">
        {amount} {date}
      </span>
      <button onClick={handleClick}>...</button>
      {showDetails && (
        <TransactionsViewCardDetails
          item_name={item_name}
          amount={amount}
          date={date}
          sender={sender}
          category={category}
          transactionID={transactionID}
        />
      )}
    </li>
  );
};

export default TransactionsViewCard;
