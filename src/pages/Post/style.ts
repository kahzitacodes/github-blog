import styled from 'styled-components';

export const PostContainer = styled.section`
  margin: 0 2rem;

  p, pre {
    margin-bottom: 1rem;
  }

  h2 {
    margin: 2rem 0 1rem;
  }

  ul, ol {
    padding-left: 1rem;

    li {
      & + li {
        margin-top: 1rem;
      }
    }
  }
`;