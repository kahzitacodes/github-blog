import styled from "styled-components";

export const InputContainer = styled.div`
  flex: 1;

  input {
    background-color: ${({ theme }) => theme["base-100"]};
    border: 1px solid ${({ theme }) => theme["base-40"]};
    color: ${({ theme }) => theme["base-30"]};
    padding: 0 1rem;
    transition: 0.2s ease-in-out;
    width: 100%;

    border-radius: 8px;
    height: 3.125rem;

    &::placeholder {
      color: ${({ theme }) => theme["base-50"]};
    }

    &:focus {
      border-color: ${({ theme }) => theme["base-50"]};
    }
  }
`;