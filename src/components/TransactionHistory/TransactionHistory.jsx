import PropTypes from 'prop-types';

import { Box } from '../Box';
import {
  Table,
  TableHead,
  TableHeadRow,
  TableData,
  TableRow,
} from './TransactionHistory.styled';

const TransactionRows = ({ type, amount, currency }) => {
  return (
    <TableRow>
      <TableData>{type}</TableData>
      <TableData>{amount}</TableData>
      <TableData>{currency}</TableData>
    </TableRow>
  );
};

export const TransactionHistory = ({ transactions }) => {
  return (
    <Box as="section">
      <Box py={5} mx={0}>
        <Table>
          <TableHead>
            <tr>
              <TableHeadRow>Type</TableHeadRow>
              <TableHeadRow>Amount</TableHeadRow>
              <TableHeadRow>Currency</TableHeadRow>
            </tr>
          </TableHead>
          <tbody>
            {transactions.map(({ id, type, amount, currency }) => (
              <TransactionRows
                key={id}
                id={id}
                type={type}
                amount={amount}
                currency={currency}
              />
            ))}
          </tbody>
        </Table>
      </Box>
    </Box>
  );
};

TransactionRows.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
