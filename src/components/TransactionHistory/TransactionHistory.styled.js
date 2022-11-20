import styled from 'styled-components';

export const Table = styled.table`
  outline: 1px solid black;
  margin-left: ${props => props.theme.space[0]};
  margin-right: ${props => props.theme.space[0]};
`;

export const TableHead = styled.thead`
  border: ${props => props.theme.borders.normal};
`;

export const TableHeadRow = styled.th`
  background-color: ${props => props.theme.colors.accent};
`;

export const TableRow = styled.tr`
  background-color: ${props => props.theme.colors.muted};

  &:nth-child(2n) {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

export const TableData = styled.td`
  width: 120px;
  outline: 1px solid red;
`;
