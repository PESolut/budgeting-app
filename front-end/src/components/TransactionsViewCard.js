const TransactionsViewCard = ({transaction}) => {
    console.log('TransactionViewCard.js single transaction state prop: ',transaction)
    const { item_name, amount, date, sender, category } = transaction

    return (
        <li>
            {item_name} <span className="transaction-details"> {amount} {date}</span>
        </li>
    );
};

export default TransactionsViewCard;