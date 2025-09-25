import { useState, useEffect } from 'react';

import { Dialog } from '@/components/atomics/Dialog';
import { Button } from '@/components/atomics/Button';
import { dialogs } from '@/mocks/dialogs';

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

      {/* <Input ...props />
      <Input ..props /> */}

      <div className="message-list message--income">
        {/* <Message message={message} text="Привет" time="16:00" />
          message.text, message.last_updated_at
        <Message /> */}
      </div>
    </>
  );
}

export default App;
