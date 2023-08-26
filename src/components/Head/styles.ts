import styled from 'styled-components';

export const HeadContainer = styled.div`
  background-color: ${({ theme }) => theme["base-80"]};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme["shadow-1"]};
  display: flex;
  gap: 2rem;
  padding: 2rem;
  margin-bottom: 3rem;
`;

export const HeadContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.5rem;
`;

export const HeadSocialStyled = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: .875rem;
`;

export const HeadSocialItem = styled.div`
  display: flex;
  gap: .5rem;
  align-items: center;

  svg {
    color: ${({ theme }) => theme["base-40"]};
    height: 1.125rem;
  }

  span {
    color: ${({ theme }) => theme["base-20"]};
  }
`;

export const HeadImage = styled.div`
  border-radius: 8px;
  aspect-ratio: 1 / 1;
  width: 9.25rem;
  height: 9.25rem;
  flex-shrink: 0;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

export const HeadHeadlineStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: .875rem;
`;