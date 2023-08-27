import { ReactNode, useCallback, useEffect, useState } from 'react';
import { createContext } from 'use-context-selector';
import { api } from '../lib/axios';

export interface IIssues {
  id: number;
  number: number;
  html_url: string;
  created_at: string;
  title: string;
  body: string;
  comments: string;
}

interface IIssueContext {
  issues: IIssues[];
  totalIssues: number;
  fetchIssues: (query: string) => Promise<void>;
}

interface IIssueContextProvider {
  children: ReactNode;
}

export const IssueContext = createContext({} as IIssueContext);

export function IssueContextProvider({ children }: IIssueContextProvider) {
  const [issues, setIssues] = useState<IIssues[]>([]);
  const [totalIssues, setTotalIssues] = useState<number>(0);

  const fetchIssues = useCallback(async function (query?: string) {

    let paramsQuery = query ?? '';

    const response = await api.get('/search/issues', {
      params: {
        q: `${paramsQuery} repo:kahzitacodes/github-blog`
      }
    });

    if (response.status === 200) {
      const { data } = response;
      const setIssusesData = data.items.map((issue: IIssues) => {
        return {
          id: issue.id,
          number: issue.number,
          html_url: issue.html_url,
          created_at: issue.created_at,
          title: issue.title,
          body: issue.body,
          comments: issue.comments,
        };
      });
      setIssues(setIssusesData);
      setTotalIssues(data.total_count);
    }
  }, []);

  useEffect(() => {
    fetchIssues();
  }, []);

  return (
    <IssueContext.Provider value={{ issues, fetchIssues, totalIssues }}>
      {children}
    </IssueContext.Provider>
  );
}