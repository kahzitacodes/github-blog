import { Head, HeadHeadline, HeadSocial } from '../../components/Head';
import { LayoutContainer } from '../../layouts/DefaultLayout/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { PostContainer } from './style';
import { Link, useParams } from 'react-router-dom';
import { api } from '../../lib/axios';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import remarkGfm from 'remark-gfm';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export function Post() {
  const params = useParams();
  const [content, setContent] = useState<any>({});
  const [date, setDate] = useState<any>();

  const fetchIssue = async function () {
    try {
      const response = await api.get(`/repos/kahzitacodes/github-blog/issues/${params.postId}`);
      const { data } = response;
      setContent(data);
      setDate(data.created_at);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchIssue();
  }, []);

  const socialItems = [
    {
      label: content.user?.login,
      icon: <FontAwesomeIcon icon={faGithubAlt} />
    },
    {
      label: date ? formatDistanceToNow(new Date(date), {
        locale: ptBR,
        addSuffix: true
      }) : null,
      icon: <FontAwesomeIcon icon={faCalendar} />
    },
    {
      label: content.comments?.toString() + (content.comments === 1 ? ' seguidor' : ' seguidores'),
      icon: <FontAwesomeIcon icon={faComment} />
    }
  ];

  return (
    <LayoutContainer>
      <Head>
        <HeadHeadline>
          <Link className="button-link" to="/"><FontAwesomeIcon icon={faChevronLeft} />Voltar</Link>
          <Link className="button-link" target='_blaked' to={content?.html_url}>
            Ver no Github<FontAwesomeIcon icon={faUpRightFromSquare} />
          </Link>
        </HeadHeadline>
        <h1>{content.title}</h1>
        <HeadSocial items={socialItems} />
      </Head>

      <PostContainer>
        <ReactMarkdown
          remarkPlugins={[[remarkGfm]]}
          components={{
            h1: 'h2',
            code: ({ inline, className, children, ...props }) => {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  {...props}
                  language='javascript'
                  style={dracula}
                  customStyle={{ borderRadius: '8px', padding: '16px' }}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code {...props} className={className}>
                  {children}
                </code>
              );
            }
          }}
        >
          {content?.body ?? ''}
        </ReactMarkdown>
      </PostContainer>
    </LayoutContainer>
  );
}