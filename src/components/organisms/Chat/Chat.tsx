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
import { ChatPanel } from '@/components/molecules/ChatPanel';

export default function Chat() {
  const { id } = useParams();
  const [dialogs, setDialogs] = useState<DialogInterface[]>([]);
  const [messages, setMessages] = useState<Record<number, MessageInterface[]>>({});

  const [isVisible, setIsVisible] = useState(false);

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

  function onTogglePanel() {
    setIsVisible((visible) => !visible);
  }

  useEffect(() => {
    // Emulate api request
    const timeout = setTimeout(() => {
      setDialogs(mockDialogs);
      setMessages(mockMessages);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const currentDialog = useMemo(() => dialogs.find((dialog) => dialog.id === Number(id)), [dialogs, id]);
  const messageById = messages[Number(id)] || [];
  const dialogAttachments = messageById.flatMap((message) => message.attachments);

  return (
    <section className="chat">
      {currentDialog && (
        <>
          <div className="chat__main-content">
            <ChatHeader dialog={currentDialog} onClick={onTogglePanel} />
            <ChatContent messages={messageById} />
            <ChatFooter onSend={handleAddMessage} />
          </div>

          <div className="chat__info-panel">
            <ChatPanel isVisible={isVisible} dialog={currentDialog} dialogAttachments={dialogAttachments} />
          </div>
        </>
      )}
    </section>
  );
}
