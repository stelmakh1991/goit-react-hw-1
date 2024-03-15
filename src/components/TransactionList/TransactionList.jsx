import TransactionItem from './TransactionItem/TransactionItem';
import s from './TransactionList.module.css';

const TransactionList = ({ transactions }) => {
  return (
    <table className={s.transactionTable}>
      <thead className={s.tableHead}>
        <tr>
          <th className={s.columnHeader}>Type</th>
          <th className={s.columnHeader}>Amount</th>
          <th className={s.columnHeader}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <TransactionItem key={transaction.id} {...transaction} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionList;