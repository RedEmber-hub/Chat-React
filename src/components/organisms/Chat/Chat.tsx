import './Chat.scss';
import { ChatHeader } from '@/components/molecules/ChatHeader';

import { ChatContent } from '@/components/molecules/ChatContent';
import { ChatFooter } from '@/components/molecules/ChatFooter';
import { useParams } from 'react-router';
import { dialogs as mockDialogs } from '@/mocks/dialogs';
import { messages as mockMessages } from '@/mocks/messages';
import { useEffect, useState, useMemo } from 'react';
import { DialogInterface } from '@/types/models/Dialog';
import { MessageInterface } from '@/types/models/Message';

export default function Chat() {
  const { id } = useParams();
  const [dialogs, setDialogs] = useState<DialogInterface[]>([]);
  const [messages, setMessages] = useState<Record<number, MessageInterface[]>>({});

  function handleAddMessage(messageText: string) {
    let messagesLength = messages[Number(id)].length;

    const newMessage: MessageInterface = {
      id: messagesLength++,
      dialog_id: +id!,
      sender_name: '',
      message: messageText,
      created_at: new Date().toISOString(),
      income: messagesLength % 2 === 0,
      status: 'check',
      attachments: [],
    };

    setMessages((prevMessages) => ({
      ...prevMessages,
      [id!]: [...(prevMessages[Number(id)] || []), newMessage],
    }));
  }

  useEffect(() => {
    // Emulate api request
    setTimeout(() => {
      setDialogs(mockDialogs);
      setMessages(mockMessages);
    }, 1000);
  }, []);

  const currentDialog = useMemo(() => dialogs.find((dialog) => dialog.id === Number(id)), [dialogs, id]);
  const messageById = useMemo(() => messages[Number(id)] || [], [messages, id]);

  return (
    <section className="chat">
      {currentDialog && (
        <>
          <ChatHeader dialog={currentDialog} />
          <ChatContent messages={messageById} />
          <ChatFooter onSend={handleAddMessage} />
        </>
      )}
    </section>
  );
}
