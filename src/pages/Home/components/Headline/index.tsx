import { useContextSelector } from 'use-context-selector';
import { HeadlineContainer } from './styles';
import { IssueContext } from '../../../../contexts/IssuesContext';

export function Headline() {
  const totalIssues = useContextSelector(IssueContext, (context) => {
    return context.totalIssues;
  });

  return (
    <HeadlineContainer>
      <h2>Publicações</h2>
      <span>{totalIssues + (totalIssues === 1 ? ' publicação' : ' publicações')}</span>
    </HeadlineContainer>
  );
}