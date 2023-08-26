import styled from 'styled-components';

export const CardContainer = styled.a`
  background-color: ${({ theme }) => theme["base-70"]};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1.25rem 1.5rem;
  cursor: pointer;
  transition: .2s ease-in-out;

  &:hover {
    box-shadow: ${({ theme }) => theme["shadow-1"]};
  }
  
  p {
    color: ${({ theme }) => theme["base-20"]};
  };
`;

export const CardHeadline = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  justify-content: space-between;
  align-items: baseline;

  span {
    color: ${({ theme }) => theme["base-40"]};
    flex: 5 1 40%;
    text-align: end;
  }
`;