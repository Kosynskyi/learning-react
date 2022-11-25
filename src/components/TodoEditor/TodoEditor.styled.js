import styled from 'styled-components';

export const TodoEditorForm = styled.form`
  width: 600px;
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.space[4]}px;
  border: ${props => props.theme.borders.normal};
  border-color: ${props => props.theme.colors.black};
  border-radius: ${props => props.theme.radii.normal};
  margin-bottom: ${props => props.theme.space[5]}px;
`;

export const TodoEditorTextarea = styled.textarea`
  padding: ${props => props.theme.space[5]}px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;

  font: inherit;
  line-height: ${props => props.theme.lineHeights.body};
  letter-spacing: 0.01em;

  resize: none;
  margin-bottom: ${props => props.theme.space[5]}px;
`;

export const TodoEditorButton = styled.button`
  width: 100%;
  margin-left: ${props => props.theme.space[0]};
  border-radius: ${props => props.theme.radii.normal};
  padding: ${props => props.theme.space[4]}px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  font-weight: ${props => props.theme.fontWeights.normal};
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.secondary};
  }

  &:active {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;
