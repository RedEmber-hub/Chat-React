import './Chat.scss';
import { ChatHeader } from '@/components/molecules/ChatHeader';

import { ChatContent } from '@/components/molecules/ChatContent';
import { ChatFooter } from '@/components/molecules/ChatFooter';
import { useParams } from 'react-router';
import { dialogs } from '@/mocks/dialogs';

export default function Chat() {
  const { id } = useParams();

  const dialogId = Number(id); // если id числовой
  const currentDialog = dialogs.find((d) => d.id === dialogId);

  return (
    <section className="chat">
      {currentDialog && (
        <>
          <ChatHeader />
          <ChatContent />
          <ChatFooter />
        </>
      )}
    </section>
  );
}
