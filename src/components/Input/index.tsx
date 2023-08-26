import { InputContainer } from './style';
import { IInput } from './types';

export function Input({ id, label, helper, register, ...rest }: IInput) {
  return (
    <InputContainer>
      <input id={id} {...register && (register(id))} {...rest} />
    </InputContainer>
  );
}