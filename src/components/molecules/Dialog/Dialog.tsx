import { Avatar } from '@/components/atoms/Avatar';
import { Badge } from '@/components/atoms/Badge';
import { DialogProps } from './Dialog.types';

import './Dialog.scss';
import { formatDateTime } from '@/utils/dateTimeFormat';
import { Icon } from '@/components/atoms/Icon';
import classNames from 'classnames';
import { useLocation } from 'react-router';

export default function Dialog({ dialogProp, isLoading, onClick }: DialogProps) {
  const location = useLocation();

  function isActive(id: number, pathname: string) {
    return pathname === `/chat/${id}`;
  }

  const className = classNames({
    dialog: true,
    'cursor-pointer': true,
    'dialog--active': isActive(dialogProp.id, location.pathname),
  });

  return (
    <>
      {isLoading ? (
        <div className="dialog dialog--skeleton cursor-pointer">
          <Avatar size="m">
            <div className="skeleton skeleton--animated"></div>
          </Avatar>

          <div className="dialog__content">
            <div className="dialog__header">
              <div className="skeleton skeleton--animated"></div>
            </div>
            <div className="dialog__footer">
              <div className="skeleton skeleton--animated"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className={className} onClick={() => onClick?.(dialogProp.id)}>
          <Avatar size="m" src={dialogProp.avatar_url} user_name={dialogProp.sender_name} />

          <div className="dialog__content">
            <div className="dialog__header">
              <div className="dialog__title-icon">
                <div className="dialog__title">
                  <span className="text-main text-main--bold black">{dialogProp.sender_name}</span>
                </div>

                {dialogProp.is_verified && (
                  <div className="dialog__icon">
                    <Icon name="verified" />
                  </div>
                )}
              </div>

              <div className="dialog__time">
                <time className="caption icon">{formatDateTime(dialogProp.last_updated_at)}</time>
              </div>
            </div>

            <div className="dialog__footer">
              <div className="dialog__message">
                <p className="text icon text-truncated">{dialogProp.last_message}</p>
              </div>

              {dialogProp.unread_count > 0 && <Badge size="s" color="success" text={dialogProp.unread_count} />}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
