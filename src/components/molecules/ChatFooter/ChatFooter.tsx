import { Button } from '@/components/atoms/Button';
import { InputField } from '@/components/atoms/InputField';

import './ChatFooter.scss';

export default function ChatFooter() {
  return (
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
  );
}
