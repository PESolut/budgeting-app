import TransactionsViewCard from "./TransactionsViewCard";

const TransactionsView = ({ transactions }) => {
  const sortedTransactions = transactions.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <div className="transactions-view">
      <h3>Transactions</h3>
      <ul className="transactions-view-list">
        {sortedTransactions.map((transaction) => (
          <TransactionsViewCard
            key={transaction.id}
            transaction={{
              ...transaction,
              date: new Date(transaction.date).toLocaleDateString(),
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default TransactionsView;
