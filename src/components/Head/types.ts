import { ReactElement } from 'react';

export interface IHead {
  img?: string;
  imgAlt?: string;
  children: ReactElement | ReactElement[];
}

export interface IHeadSocialitem {
  icon: JSX.Element;
  label: string | number;
}

export interface IHeadSocial {
  items: IHeadSocialitem[];
}