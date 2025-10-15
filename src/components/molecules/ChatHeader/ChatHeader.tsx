import { Avatar } from '@/components/atoms/Avatar';
import { Button } from '@/components/atoms/Button';
import { ChatHeaderProps } from './ChatHeader.type';
import './ChatHeader.scss';

export default function ChatHeader({ dialog }: ChatHeaderProps) {
  // проверка на наличие диалога в props
  const hasDialog = dialog && Object.keys(dialog).length > 0;

  return (
    <div className="chat__header">
      <div className="chat__header-avatar">
        {/* <!-- аватар компонент --> */}
        {hasDialog ? <Avatar src={dialog.avatar_url} user_name={dialog.sender_name} size="s" /> : <h1>Аватарка</h1>}
      </div>

      <div className="chat__header-info">
        <div className="chat__header-info-title-subtitle">
          {/* <!-- название чата --> */}
          <span className="text-main text-main--bold black">{hasDialog ? dialog.sender_name : 'Аноним'}</span>

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
