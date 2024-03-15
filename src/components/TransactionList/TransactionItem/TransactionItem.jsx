import s from './TransactionItem.module.css';

const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr className={s.transactionRow}>
      <td className={s.cell}>{type}</td>
      <td className={s.cell}>{amount}</td>
      <td className={s.cell}>{currency}</td>
    </tr>
  );
};

export default TransactionItem;