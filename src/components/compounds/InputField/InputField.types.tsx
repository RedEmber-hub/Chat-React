import { ElementSize } from '@/types/ElementSize';

export interface InputFieldProps {
  size: ElementSize;
  color: 'primary' | 'secondary';
  children: React.ReactNode;
}

export interface FieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onInput'> {e: string, event?: React.FormEvent<HTMLInputElement>) => void;
}
