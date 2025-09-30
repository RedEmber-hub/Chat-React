import { ElementSize } from '@/types/ElementSize';

type InputColor = 'primary' | 'secondary';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: ElementSize;
  color?: InputColor;
  leftIcon?: string;
  rightIcon?: string;
}
