import { dialogs } from '@/mocks/dialogs';
import { Sidebar } from './components/organisms/Sidebar';
import { Chat } from './components/organisms/Chat';

import { Route, Routes, useNavigate } from 'react-router';

function App() {
  const navigate = useNavigate();

  // Пути для роутинга
  const paths = ['/', '/chat/:id'];

  function handleClickDialog(id: number) {
    navigate(`/chat/${id}`);
  }

  return (
    <>
      <Routes>
        {paths.map((path) => (
          <Route
            path={path}
            element={
              <>
                <Sidebar dialogs={dialogs} onClickDialog={handleClickDialog} />
                <Chat />
              </>
            }
          />
        ))}

        {/* Любые другие пути — ничего */}
      </Routes>
    </>
  );
}

export default App;
