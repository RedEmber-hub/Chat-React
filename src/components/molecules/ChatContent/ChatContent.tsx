import { Badge } from '@/components/atoms/Badge';
import { Message } from '@/components/atoms/Message';
import { messages } from '@/mocks/messages';

import './ChatContent.scss';

export default function ChatContent() {
  return (
    <div className="chat__content">
      <div className="chat__message-list">
        {/* <!-- группа сообщений --> */}
        <div className="chat__message-groups">
          {/* <!-- дата сообщений --> */}
          <div className="chat__message-group-date">
            <Badge size="m" color="secondary" text="Сегодня" />
          </div>

          <div className="chat__message-item chat__message-item--income">
            {/* <!-- компонент сообщения друга --> */}

            {/* 
              click by 1 chat = .../chat/1

              1: [{}, {}, {}]

              messages.map((message) => {
                return (
                  <div className="chat__message-item chat__message-item--income">
                    <Message messageProp={message} />
                  </div>
                  )
              })
            
            */}
            <Message messageProp={messages[1][0]} />
          </div>

          <div className="chat__message-item chat__message-item--outcome">
            {/* <!-- Компонент моего сообщения --> */}
            <Message messageProp={messages[2][0]} />
          </div>
        </div>
      </div>
    </div>
  );
}
