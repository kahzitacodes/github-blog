export interface ICardIssues {
  number: number;
  html_url: string;
  title: string;
  comments: string;
  created_at: string;
  body: string;
}

export interface ICard {
  card: ICardIssues;
}