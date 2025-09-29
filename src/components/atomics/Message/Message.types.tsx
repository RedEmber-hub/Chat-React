import { MessageType } from '@/types/MessageType';

export interface MessageProps {
  content: string;
  time: string;
  messageType: MessageType;
}
