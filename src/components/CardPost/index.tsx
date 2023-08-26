import { useNavigate } from 'react-router-dom';
import { CardContainer, CardHeadline } from './styles';
import { ICard } from './types';
import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function Card({ card }: ICard) {
  const navigate = useNavigate();

  return (
    <CardContainer onClick={() => navigate(`/post/${card.number}`)}>

      <CardHeadline>
        <span>{formatDistance(new Date(card.created_at), new Date, {
          locale: ptBR,
          addSuffix: true
        })}</span>

        <h1>{card.title}</h1>
      </CardHeadline>
      <p>{card.body.substring(0, 175).concat('...')}</p>
    </CardContainer>
  );
}