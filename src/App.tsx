import { dialogs } from '@/mocks/dialogs';
import { Sidebar } from './components/organisms/Sidebar';
import { Chat } from './components/organisms/Chat';

import { Route, Routes, useNavigate } from 'react-router';

function App() {
  const navigate = useNavigate();

  function handleClickDialog(id: number) {
    navigate(`/chat/${id}`);
  }

  return (
    <>
      <Sidebar dialogs={dialogs} onClickDialog={handleClickDialog} />

      <Routes>
        <Route path="/chat/:id" element={<Chat />} />
      </Routes>
    </>
  );
}

export default App;
