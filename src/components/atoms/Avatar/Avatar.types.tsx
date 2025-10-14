import { ElementSize } from '@/types/ElementSize';

export interface AvatarProps {
  src?: string;
  user_name?: string;
  size?: ElementSize;
  // универсальный тип для любого содержимого, которое React умеет рендерить (JSX, строки, числа, массивы, фрагменты, null и т.д.).
  children?: React.ReactNode;
}
