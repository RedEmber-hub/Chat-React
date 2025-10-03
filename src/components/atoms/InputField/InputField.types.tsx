import { ElementSize } from '@/types/ElementSize';

export interface InputFieldProps {
  size: ElementSize;
  color: 'primary' | 'secondary';
  children: React.ReactNode;
}

// extends расширяет FiledProps стандартными атрибутами инпута
export interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChangeValue?: (value: string) => void;
}
