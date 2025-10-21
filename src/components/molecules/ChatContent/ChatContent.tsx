import './ChatContent.scss';

import { Badge } from '@/components/atoms/Badge';
import { Message } from '@/components/atoms/Message';
import { ChatContentProps } from './ChatContent.type';

import classNames from 'classnames';
import { MessageInterface } from '@/types/models/Message';
import { useMemo } from 'react';
import { dateTimeFormat } from '@/utils/dateTimeFormat';

function groupMessagesByDate(messages: MessageInterface[]) {
  return messages.reduce((acc, message) => {
    const date = new Date(message.created_at).toISOString().split('T')[0]; // 2025-10-14

    if (!acc[date]) acc[date] = [];

    acc[date].push(message);

    return acc;
  }, {} as Record<string, MessageInterface[]>);
}

export default function ChatContent({ messages }: ChatContentProps) {
  const hasMessages = messages && Object.keys(messages).length > 0;

  const groupedMessages = useMemo(() => {
    if (!hasMessages) return {};

    return groupMessagesByDate(messages);
  }, [messages]);

  if (!hasMessages) {
    return (
      <img src="https://i.gifer.com/5Tz.gif" alt="картинка приветствия" style={{ width: '155px', height: '155px' }} />
    );
  }

  return (
    <div className="chat__content">
      <div className="chat__message-list">
        {Object.entries(groupedMessages)
          .reverse()
          .map(([date, messages]) => (
            // группа сообщений
            <div key={date} className="chat__message-groups">
              {/* дата сообщений */}
              <div className="chat__message-group-date">
                <Badge size="m" color="secondary" text={dateTimeFormat(date, 'ru-RU', { useTime: false })} />
              </div>

              {/* рендер сообщений в зависимости от id диалога (ключа) */}
              {messages.map((message) => {
                const className = classNames({
                  'chat__message-item': true,
                  'chat__message-item--income': message.income,
                  'chat__message-item--outcome': !message.income,
                });

                return (
                  <div key={message.id} className={className}>
                    <Message messageProp={message} />
                  </div>
                );
              })}
            </div>
          ))}
      </div>
    </div>
  );
}
