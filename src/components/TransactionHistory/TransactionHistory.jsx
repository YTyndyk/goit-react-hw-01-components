import PropTypes from 'prop-types';
import {
  Table,
  Tr,
  ExtendedTr,
  Th,
  Td,
  Type,
} from './TransactionHistory.staled';

export function TransactionHistory({ items }) {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </thead>

      <tbody>
        {items.map(({ id, type, currency, amount }, idx) => {
          return (
            <TableRow
              key={id}
              id={id}
              type={type}
              currency={currency}
              amount={amount}
              index={idx}
            />
          );
        })}
      </tbody>
    </Table>
  );
}
function TableRow({ type, amount, currency, index }) {
  return (
    <ExtendedTr idx={index}>
      <Type>{type}</Type>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </ExtendedTr>
  );
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
TableRow.propTypes = {
  index: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
