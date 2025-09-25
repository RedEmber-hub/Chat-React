import { Avatar } from '../Avatar';
import { Badge } from '../Badge';
import { DialogProps } from './Dialog.types';

import './Dialog.scss';

export default function Dialog({ dialogProp, isLoading }: DialogProps) {
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
        <div className="dialog cursor-pointer">
          <Avatar size="m" src={dialogProp.avatar_url} user_name={dialogProp.sender_name} />

          <div className="dialog__content">
            <div className="dialog__header">
              <div className="dialog__title-icon">
                <div className="dialog__title">
                  <span className="text-main text-main--bold black">{dialogProp.sender_name}</span>
                </div>

                {dialogProp.is_verified && (
                  <div className="dialog__icon">
                    <img src="/icons/verified.svg" alt="галочка верификации" />
                  </div>
                )}
              </div>

              <div className="dialog__time">
                <time className="caption icon">{dialogProp.last_updated_at}</time>
              </div>
            </div>

            <div className="dialog__footer">
              <div className="dialog__message">
                <span className="text icon">{dialogProp.last_message}</span>
              </div>

              <Badge size="s" color="success" text={dialogProp.unread_count} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
