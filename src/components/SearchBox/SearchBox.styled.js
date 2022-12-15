import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${p => p.theme.space[6]}px;
  margin-bottom: ${p => p.theme.space[6]}px;
`;

export const Input = styled.input`
  width: 80%;
  padding: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[7]}px;
`;
