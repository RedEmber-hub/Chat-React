import { useState, useEffect } from 'react';

import { Dialog } from '@/components/compounds/Dialog';
import { Button } from '@/components/atomics/Button';
import { dialogs } from '@/mocks/dialogs';
import { Message } from './components/atomics/Message';
import { Input } from './components/atomics/Input';
import { messages } from './mocks/messages';

function App() {
  const [isLoading, setIsLoading] = useState(true);

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

      <Input placeholder="Поиск" leftIcon="search" size="s" color="secondary" />
      <Input placeholder="Напишите сообщение" leftIcon="emoji-icon" rightIcon="send-icon" size="m" color="primary" />
    </>
  );
}

export default App;
