import { InputHTMLAttributes } from 'react';

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helper?: string;
  register?: any;
}