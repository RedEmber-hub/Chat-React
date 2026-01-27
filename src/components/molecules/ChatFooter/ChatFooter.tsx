import { Button } from '@/components/atoms/Button';
import { InputField } from '@/components/atoms/InputField';

import './ChatFooter.scss';
import { useState } from 'react';
import { ChatFooterProps } from './ChatFooter.type';
import EmojiPicker from 'emoji-picker-react';
import { Panel } from '@/components/atoms/Panel';

export default function ChatFooter({ onSend }: ChatFooterProps) {
  const [messageText, setMessageText] = useState('');
  const [isEmojiVisible, setEmojiVisible] = useState(false);

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  }

  function handleSendMessage() {
    const trimmedMessage = messageText.trim();

    if (trimmedMessage === '') return;

    onSend(trimmedMessage);
    setMessageText('');
  }

  function handleEmojiPanel() {
    setEmojiVisible((value) => !value);
  }

  return (
    <div className="chat__footer">
      <InputField size="m" color="primary">
        <InputField.Slot>
          <Button size="s" icon="emoji-icon" onClick={handleEmojiPanel} />
          {isEmojiVisible && (
            <div className="chat__wrapper">
              <Panel>
                <EmojiPicker onEmojiClick={(emojiObject) => console.log(emojiObject)} />
              </Panel>
            </div>
          )}
        </InputField.Slot>

        <InputField.Field
          placeholder="Напишите сообщение"
          onChangeValue={setMessageText}
          value={messageText}
          onKeyDown={handleKeyDown}
        />

        <InputField.Slot>
          <Button size="s" icon="send-icon" onClick={handleSendMessage} />
        </InputField.Slot>
      </InputField>
    </div>
  );
}
