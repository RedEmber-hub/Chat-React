import { ElementSize } from '@/types/ElementSize';

export interface ButtonProps {
  size: ElementSize;
  icon: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
