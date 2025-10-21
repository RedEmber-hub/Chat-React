import { AttachmentInterface } from '@/types/models/Attachment';
import { DialogInterface } from '@/types/models/Dialog';

export interface ChatPanelProps {
  isVisible: boolean;
  dialog: DialogInterface;
  dialogAttachments: AttachmentInterface[];
}
