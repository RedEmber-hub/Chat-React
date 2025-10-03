import { dialogs } from '@/mocks/dialogs';
import { Sidebar } from './components/organisms/Sidebar';
import { Chat } from './components/organisms/Chat';

function App() {
  return (
    <>
      <Sidebar dialogs={dialogs} />
      <Chat />
    </>
  );
}

export default App;
