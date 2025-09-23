import { Dialog } from '@/components/atomics/Dialog';
import { dialogs } from '@/mocks/dialogs';

function App() {
  return (
    <>
      {dialogs.map((dialog) => {
        return <Dialog dialogProp={dialog} key={dialog.id} />;
      })}
    </>
  );
}

export default App;
