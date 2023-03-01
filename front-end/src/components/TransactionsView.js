import TransactionsViewCard from "./TransactionsViewCard";

const TransactionsView = ({transactions}) => {
    console.log('TransactionsView.js useState for transactions object:',transactions)
    return (
        <div className="transactions-view">
            <h3>Transactions</h3>
            <ul className="transactions-view-list">
                {
                    transactions.map(transaction => <TransactionsViewCard key={transaction.id} transaction={transaction} />)
                }
            </ul>
        </div>
    );
};

export default TransactionsView;