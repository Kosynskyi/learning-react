import PropTypes from 'prop-types';

import { Box } from '../Box';
import { StatList, Title, Item, Label, Percentage } from './Statistics.styled';

export const Statistics = ({ title = null, stats }) => {
  return (
    <Box as="section">
      <Box py={5} width="250px" mx={0}>
        {title && <Title>{title}</Title>}

        <StatList>
          {stats.map(({ id, label, percentage }) => {
            return (
              <Item key={id}>
                <Label>{label} </Label>
                <Percentage>{percentage}</Percentage>
              </Item>
            );
          })}
        </StatList>
      </Box>
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
