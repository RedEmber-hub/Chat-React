import { Button } from '@/components/atoms/Button';
import './ChatPanel.scss';
import classNames from 'classnames';

import { ChatPanelProps } from './ChatPanel.type';
import { Avatar } from '@/components/atoms/Avatar';
import { Icon } from '@/components/atoms/Icon';

export default function ChatPanel({ isVisible, dialog, dialogAttachments }: ChatPanelProps) {
  const className = classNames({
    'chat-panel': true,
    ['chat-panel--visible']: isVisible,
  });

  return (
    <aside className={className}>
      <div className="chat-panel__header">
        <div className="chat-panel__close-button">
          <Button size="s" icon="close" />
        </div>

        <div className="chat-panel__title">
          <span className="text-main text-main--bold">User Info</span>
        </div>
      </div>

      <div className="chat-panel__content">
        <div className="chat-panel__avatar">
          <Avatar size="l" src={dialog.avatar_url} user_name={dialog.sender_name} />
        </div>

        <div className="chat-panel__name-status">
          <div className="chat-panel__name">
            <span className="text-main text-main--bold">{dialog.sender_name}</span>
          </div>

          <div className="chat-panel__status">
            <span className="text icon">Online</span>
          </div>
        </div>
      </div>

      <div className="chat-panel__user-details">
        {/* компонент */}
        <div className="item">
          <div className="item__icon">
            <Icon name="call-icon" />
          </div>
          <div className="item__title-subtitle">
            <div className="item__title">
              <span className="text-main text-main--medium">+7 991 854 1425</span>
            </div>

            <div className="item__subtitle">
              <span className="text icon">Phone</span>
            </div>
          </div>
        </div>
      </div>

      {dialogAttachments.length > 0 && (
        <div className="chat-panel__attachments">
          {dialogAttachments.map((dialogAttachment) => (
            <img src={dialogAttachment.attachment_url} alt={dialogAttachment.file_name} key={dialogAttachment.id} />
          ))}
        </div>
      )}
    </aside>
  );
}
