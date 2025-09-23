import './Dialog.scss';
import { DialogProps } from './Dialog.types';

export default function Dialog({ dialogProp }: DialogProps) {
  return (
    <>
      <div className="dialog cursor-pointer">
        <div className="avatar avatar--m">
          <img src="./img/avatar.jpg" alt="аватар пользователя" />
        </div>

        <div className="dialog__content">
          <div className="dialog__header">
            <div className="dialog__title-icon">
              <div className="dialog__title">
                <span className="text-main text-main--bold black">{dialogProp.sender_name}</span>
              </div>

              {dialogProp.is_verified && (
                <div className="dialog__icon">
                  <img src="./img/verified.svg" alt="галочка верификации" />
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

            <div className="badge badge--success">
              <span className="caption white">{dialogProp.unread_count}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
