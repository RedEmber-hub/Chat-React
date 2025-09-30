import { useState, useEffect } from 'react';

import { Dialog } from '@/components/compounds/Dialog';
import { Button } from '@/components/atomics/Button';
import { dialogs } from '@/mocks/dialogs';
import { Message } from './components/atomics/Message';

import { messages } from './mocks/messages';
import { InputField } from './components/atomics/InputField';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // Emulate api request

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  function onClick() {
    console.log('Clicked');
  }

  return (
    <>
      {dialogs.map((dialog) => {
        return <Dialog dialogProp={dialog} key={dialog.id} isLoading={isLoading} />;
      })}

      {messages.map((message) => {
        return <Message messageProp={message} key={message.id} />;
      })}

      <InputField size="s" color="secondary">
        <InputField.Slot>
          <Button size="s" icon="search" />
        </InputField.Slot>

        <InputField.Field value={search} onChangeValue={setSearch} />
      </InputField>

      <InputField size="m" color="primary">
        <InputField.Slot>
          <Button size="s" icon="emoji-icon" />
        </InputField.Slot>

        <InputField.Field value={search} onChangeValue={setSearch} />

        <InputField.Slot>
          <Button size="s" icon="send-icon" />
        </InputField.Slot>
      </InputField>
    </>
  );
}

export default App;
