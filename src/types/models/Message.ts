import { AttachmentInterface } from './Attachment';

export type StatusType = 'check' | 'read';

export interface MessageInterface {
  id: number;
  dialog_id: number;
  sender_name: string;
  message: string;
  created_at: string;
  status: StatusType;
  income: boolean;
  attachments: AttachmentInterface[];
}

// Array<AttachmentInterface> === AttachmentInterface[]
