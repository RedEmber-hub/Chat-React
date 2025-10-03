import './Chat.scss';
import { Message } from '@/components/atoms/Message';
import { Badge } from '@/components/atoms/Badge';
import { ChatHeader } from '@/components/molecules/ChatHeader';
import { InputField } from '@/components/atoms/InputField';

// TODO: удалить messages и dialogs
import { messages } from '@/mocks/messages';
import { dialogs } from '@/mocks/dialogs';
import { Button } from '@/components/atoms/Button';

export default function Chat() {
  return (
    <section className="chat">
      <ChatHeader avatarUrl={dialogs[0].avatar_url} senderName={dialogs[0].sender_name} />

      {/* <!-- контент чата --> */}
      <div className="chat__content">
        <div className="chat__message-list">
          {/* <!-- группа сообщений --> */}
          <div className="chat__message-groups">
            {/* <!-- дата сообщений --> */}
            <div className="chat__message-group-date">
              <Badge size="m" color="secondary" text="Сегодня" />
            </div>

            <div className="chat__message-item chat__message-item--income">
              {/* <!-- компонент сообщения друга --> */}
              <Message messageProp={messages[0]} />
            </div>

            <div className="chat__message-item chat__message-item--outcome">
              {/* <!-- Компонент моего сообщения --> */}
              <Message messageProp={messages[1]} />
            </div>
          </div>
        </div>
      </div>

      <div className="chat__footer">
        <InputField size="m" color="primary">
          <InputField.Slot>
            <Button size="s" icon="emoji-icon" />
          </InputField.Slot>

          <InputField.Field placeholder="Напишите сообщение" />

          <InputField.Slot>
            <Button size="s" icon="send-icon" />
          </InputField.Slot>
        </InputField>
      </div>
    </section>
  );
}
