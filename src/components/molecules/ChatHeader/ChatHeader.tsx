import { Avatar } from '@/components/atoms/Avatar';
import { Button } from '@/components/atoms/Button';
import { ChatHeaderProps } from './ChatHeader.type';
import './ChatHeader.scss';
import { useParams } from 'react-router';
import { dialogs } from '@/mocks/dialogs';

export default function ChatHeader() {
  // Получаем id чата из параметров URL для отображения отправителя
  const { id } = useParams();

  const currentDialog = dialogs.find((dialog) => dialog.id === Number(id));

  return (
    <div className="chat__header">
      <div className="chat__header-avatar">
        {/* <!-- аватар компонент --> */}
        {currentDialog && <Avatar src={currentDialog.avatar_url} user_name={currentDialog.sender_name} size="s" />}
      </div>

      <div className="chat__header-info">
        <div className="chat__header-info-title-subtitle">
          {/* <!-- название чата --> */}
          <span className="text-main text-main--bold black">{currentDialog ? currentDialog.sender_name : ''}</span>

          {/* <!-- статус --> */}
          <span className="text icon">в сети 5 мин назад</span>
        </div>
      </div>

      <div className="chat__header-actions">
        {/* <!-- кнопка поиска --> */}
        <Button size="s" icon="search" />

        {/* <!-- кнопка вызова --> */}
        <Button size="s" icon="call-icon" />

        {/* <!-- кнопка настроек --> */}
        <Button size="s" icon="more-icon" />
      </div>
    </div>
  );
}
