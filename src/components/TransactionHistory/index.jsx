import propTypes from 'prop-types';
import style from './TransactionHistory.module.css';


export default function TransactionHistory({ items }) {
  return (
    <table className={style.transactionTable}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(({ id, type, amount, currency }) => (
        <tbody key={id}>
          <tr>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}
  TransactionHistory.propTypes = {
    items: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.string.isRequired,
        type: propTypes.string.isRequired,
        amount: propTypes.string.isRequired,
        currency: propTypes.string.isRequired,
      })
    ),
  
  
  };