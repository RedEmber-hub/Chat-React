import { dialogs } from '@/mocks/dialogs';
import { Sidebar } from './components/organisms/Sidebar';
import { Chat } from './components/organisms/Chat';

import { Route, Routes, useLocation, useNavigate } from 'react-router';

function App() {
  const navigate = useNavigate();

  function handleClickDialog(id: number) {
    navigate(`/chat/${id}`);
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Sidebar dialogs={dialogs} onClickDialog={handleClickDialog} />
              <Chat />
            </>
          }
        />

        <Route
          path="/chat/:id"
          element={
            <>
              <Sidebar dialogs={dialogs} onClickDialog={handleClickDialog} />
              <Chat />
            </>
          }
        />

        {/* Любые другие пути — ничего */}
      </Routes>
    </>
  );
}

export default App;
