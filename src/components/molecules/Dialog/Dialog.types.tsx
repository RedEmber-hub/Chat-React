import { DialogInterface } from '@/types/models/Dialog';

export interface DialogProps {
  dialogProp: DialogInterface;
  isLoading?: boolean;
  onClick?: (id: number) => void;
}
