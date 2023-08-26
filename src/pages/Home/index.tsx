import { LayoutContainer } from '../../layouts/DefaultLayout/styles';
import { Card } from '../../components/CardPost';
import { CardContainer } from './styles';
import { HeadUser } from './components/PostInfos';
import { IssueSearch } from './components/Search';
import { useContextSelector } from 'use-context-selector';
import { IssueContext } from '../../contexts/IssuesContext';
import { Headline } from './components/Headline';

export function Home() {
  const issues = useContextSelector(IssueContext, (context) => {
    return context.issues;
  });

  return (
    <LayoutContainer>
      <HeadUser />

      <Headline />
      <IssueSearch />

      {issues &&
        <CardContainer>
          {issues.map((item) => {
            return <Card key={item.id} card={item} />;
          })}
        </CardContainer>
      }

    </LayoutContainer>
  );
}