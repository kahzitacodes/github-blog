import styled from 'styled-components';

export const HeadlineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: ${({ theme }) => theme["base-40"]};
    font-size: 0.875rem;
  }
  
`;