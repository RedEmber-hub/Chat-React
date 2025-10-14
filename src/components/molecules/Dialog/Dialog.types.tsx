import { DialogInterface } from '@/types/models/Dialog';

export interface DialogProps {
  dialogProp: DialogInterface;
  isActive: boolean;
  isLoading?: boolean;
  onClick?: (id: number) => void;
}
