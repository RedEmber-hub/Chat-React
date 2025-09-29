import { useState, useEffect } from 'react';

import { Dialog } from '@/components/compounds/Dialog';
import { Button } from '@/components/atomics/Button';
import { dialogs } from '@/mocks/dialogs';
import { Message } from './components/atomics/Message';

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

      <Button size="m" icon="search" onClick={onClick} />

      <Message messageType="income" content="Привет" time="16:00" />
      <Message messageType="outcome" content="Привет, я сейчас ем йогурт он очень вкусныЙ!" time="16:01" />
      <Message
        messageType="outcome"
        content="А я забрала котам игрушка с вайлдбериз, теперь ходят радостные, улыбаются! =))))"
        time="16:03"
      />
      <Message messageType="income" content="Ну ты вообде капец!" time="16:04" />
    </>
  );
}

export default App;
