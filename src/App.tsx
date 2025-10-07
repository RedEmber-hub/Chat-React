import { dialogs } from '@/mocks/dialogs';
import { Sidebar } from './components/organisms/Sidebar';
import { Chat } from './components/organisms/Chat';

import { useNavigate } from 'react-router';

function App() {
  /* 
    Домашнее задание:

    1) Установить react-router-dom
    2) При клике на конкретный диалог делать навигацию на определенный id, в адресной строке должна появляться ссылка вида localhost:5173/chat/1
    3) Добавить активное состояние для конкретного чата, чтобы он подсвечивался так же, как при наведении
    4) Доработать компонент Аватарки, для случая, когда нет аватарки пользователя, чтобы брались инициалы у sender_name
    5) Создать компонент Panel, в котором в дальнейшем будет отображаться фильтрация диалогов
  */
  const navigate = useNavigate();

  function handleClickDialog(id: number) {
    navigate(`/chat/${id}`);
  }

  return (
    <>
      <Sidebar dialogs={dialogs} onClickDialog={handleClickDialog} />
      <Chat />
    </>
  );
}

export default App;
