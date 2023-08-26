import styled from 'styled-components';

export const CodeContainer = styled.div`
  border-radius: 4px;
  background-color: ${({ theme }) => theme["base-90"]};
  padding: 1rem;

  code {
    font-family: 'Roboto Mono', monospace;
    color: ${({ theme }) => theme.colors.primary_5};
    font-size: ${({ theme }) => theme.font_size.sm};
    white-space: pre-wrap;
  }
`;