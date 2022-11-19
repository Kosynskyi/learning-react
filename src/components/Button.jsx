import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.space[2]}px;
  margin: ${props => props.theme.space[0]}px;
  padding: ${props => props.theme.space[3]}px;
  padding-left: ${props => props.theme.space[4]}px;
  padding-right: ${props => props.theme.space[4]}px;
  border: ${props => props.theme.borders.normal};
  border-radius: ${props => props.theme.radii.normal};
  background-color: ${props =>
    props.disabled ? props.theme.colors.muted : props.theme.colors.primary};
  color: ${props => props.theme.colors.muted};
  cursor: pointer;

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

export const Button = ({
  icon: Icon = null,
  type = 'button',
  disabled = false,
  children,
}) => {
  return (
    <StyledButton type={type} disabled={disabled}>
      {Icon && <Icon />}
      {/* {icon} */}
      {children}
    </StyledButton>
  );
};
