type MessageType = 'income' | 'outcome';

export interface MessageProps {
  content: string;
  time: string;
  messageType: MessageType;
}
