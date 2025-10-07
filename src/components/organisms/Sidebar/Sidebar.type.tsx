import { DialogInterface } from '@/types/models/Dialog';

export interface SidebarProps {
  dialogs: DialogInterface[];
  onClickDialog?: (id: number) => void;
}
