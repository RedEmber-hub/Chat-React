import { ElementSize } from '@/types/ElementSize';

type BadgeColor = 'success' | 'secondary';

export interface BadgeProps {
  size: ElementSize;
  color: BadgeColor;
  text: string | number;
}
