import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../../../../components/Input';
import { useContextSelector } from 'use-context-selector';
import { IssueContext } from '../../../../contexts/IssuesContext';
import { Button, SearchContainer } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const searchSchema = z.object({
  query: z.string(),
});

type SearchData = z.infer<typeof searchSchema>;

export function IssueSearch() {
  const fetchIssues = useContextSelector(IssueContext, (context) => {
    return context.fetchIssues;
  });

  const { handleSubmit, register, formState: { isSubmitting } } = useForm<SearchData>({
    defaultValues: {
      query: ''
    },
    resolver: zodResolver(searchSchema)
  });

  const handleSearchIssues = async (data: SearchData) => {
    await fetchIssues(data.query);
  };

  return (
    <SearchContainer>
      <Input
        id='query'
        label='Publicações'
        placeholder='Buscar conteúdo'
        register={register}
      />
      <Button type="submit" onClick={handleSubmit(handleSearchIssues)} disabled={isSubmitting}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        Buscar
      </Button>
    </SearchContainer>
  );
}