import { Avatar } from '@/components/atoms/Avatar';
import { Button } from '@/components/atoms/Button';
import { ChatHeaderProps } from './ChatHeader.type';
import './ChatHeader.scss';

export default function ChatHeader({ avatarUrl, senderName }: ChatHeaderProps) {
  return (
    <div className="chat__header">
      <div className="chat__header-avatar">
        {/* <!-- аватар компонент --> */}
        <Avatar src={avatarUrl} user_name={senderName} size="s" />
      </div>

      <div className="chat__header-info">
        <div className="chat__header-info-title-subtitle">
          {/* <!-- название чата --> */}
          <span className="text-main text-main--bold black">{senderName}</span>

          {/* <!-- статус --> */}
          {/* <span className="text icon">в сети 5 мин назад</span> */}
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
