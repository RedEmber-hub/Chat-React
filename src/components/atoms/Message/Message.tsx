import { StatusType } from '@/types/models/Message';
import './Message.scss';
import { MessageProps } from './Message.types';
import classNames from 'classnames';
import { Icon } from '../Icon';
import { dateTimeFormat } from '@/utils/dateTimeFormat';

export default function Message({ messageProp }: MessageProps) {
  const className = classNames({
    message: true,
    ['message--income']: messageProp.income,
    ['message--outcome']: !messageProp.income,
  });

  // Record<key, value> = «объект, у которого ключи и значения могут быть только check или read», т.е. это типовая гарантия безопасности для объекта.
  const statusMap: Record<StatusType, StatusType> = {
    check: 'check',
    read: 'read',
  };

  return (
    <div className={className}>
      <div className="message__attachment">
        {/*  рендер картинки в зависимости от наличия картинки и их количества  */}
        {messageProp.attachments &&
          messageProp.attachments.map((file) => <img key={file.id} src={file.attachment_url} alt={file.file_name} />)}

        {/* рендер текста в зависимости от наличия текста сообщения  */}
        {messageProp.message && <span className="text-main">{messageProp.message}</span>}
      </div>

      <div className="message__footer">
        <div className="message__time">
          <time className="caption">{dateTimeFormat(messageProp.created_at)}</time>
        </div>

        <div className="message__status">
          <Icon name={`${statusMap[messageProp.status]}-icon`} size={14} />
        </div>
      </div>
    </div>
  );
}
