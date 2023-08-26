import styled from 'styled-components';

export const SearchContainer = styled.form`
  display: flex;
  gap: 1rem;
  margin-top: 1.125rem;
  margin-bottom: 3rem;
`;

export const Button = styled.button`
  align-items: center;
  display: flex;
  gap: 1rem;
  padding: 0 1.5rem;
  height: 3.125rem;

  background-color: ${({ theme }) => theme["primary"]};

  border-radius: 8px ;

  color: white;
  font-weight: 700;
  text-transform: uppercase;
  border: 0;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    background-color: ${({ theme }) => theme["base-30"]};
    cursor: not-allowed
  }

  svg {
    color: white;
    height: 1.125rem;
  }
`;