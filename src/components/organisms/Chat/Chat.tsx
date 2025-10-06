import './Chat.scss';
import { ChatHeader } from '@/components/molecules/ChatHeader';
import { InputField } from '@/components/atoms/InputField';

// TODO: удалить messages и dialogs
import { dialogs } from '@/mocks/dialogs';
import { ChatContent } from '@/components/molecules/ChatContent';
import { ChatFooter } from '@/components/molecules/ChatFooter';

export default function Chat() {
  return (
    <section className="chat">
      <ChatHeader avatarUrl={dialogs[0].avatar_url} senderName={dialogs[0].sender_name} />

      <ChatContent />

      <ChatFooter />
    </section>
  );
}
