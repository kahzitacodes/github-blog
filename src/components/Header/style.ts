import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme["primary"]};
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;
  padding-bottom: 9.375rem;
`;