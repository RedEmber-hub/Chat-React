import { Badge } from '@/components/atoms/Badge';
import { Message } from '@/components/atoms/Message';
import { messages } from '@/mocks/messages';

import './ChatContent.scss';
import { useParams } from 'react-router';
import classNames from 'classnames';

export default function ChatContent() {
  // достаёт id из url для выборки нужного чата
  const { id } = useParams();

  return (
    <div className="chat__content">
      <div className="chat__message-list">
        {/* <!-- группа сообщений --> */}
        <div className="chat__message-groups">
          {/* <!-- дата сообщений --> */}
          <div className="chat__message-group-date">
            <Badge size="m" color="secondary" text="Сегодня" />
          </div>

          {/* рендер сообщений в зависимости от id диалога (ключа) */}
          {messages[Number(id)]?.map((message) => {
            const className = classNames({
              'chat__message-item': true,
              'chat__message-item--income': message.income === true,
              'chat__message-item--outcome': message.income === false,
            });

            return (
              <div key={message.id} className={className}>
                <Message messageProp={message} />
              </div>
            );
          })}

          <div className="chat__message-item chat__message-item--outcome"></div>
        </div>
      </div>
    </div>
  );
}
