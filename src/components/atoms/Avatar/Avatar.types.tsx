import { ElementSize } from '@/types/ElementSize';

export interface AvatarProps {
  src?: string;
  user_name?: string;
  size?: ElementSize;
  // key?: value - ? = необязательное поле (опциональное)
  children?: React.ReactNode;
}
